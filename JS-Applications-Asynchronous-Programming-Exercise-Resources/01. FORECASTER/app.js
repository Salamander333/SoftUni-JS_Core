function attachEvents() {
    let input = document.getElementById('location');
    let submit = document.getElementById('submit');
    let current = document.getElementById('current');
    let upcoming = document.getElementById('upcoming');
    let forecast = document.getElementById('forecast');

    const symbols = {
        sunny: '☀',
        partlySunny: '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'
    };

    submit.addEventListener('click', getWeatherInfo);

    function checkStatus(response) {
        if (response.status >= 400) {
            forecast.innerHTML = 'Error';
            throw new Error(`Something went wrong. Error ${response.statusText}`);
        }

        return response.json();
    }

    function getWeatherInfo() {
        forecast.style.display = 'block';

        fetch('https://judgetests.firebaseio.com/locations.json')
            .then(checkStatus)
            .then((data) => {
                let location = data.filter(x => x.name === input.value)[0];
                fetch(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json`)
                    .then(checkStatus)
                    .then((data) => {
                        let forecastDiv = createHTMLElement('div', 'forecasts');

                        const symbol = symbols[data.forecast.condition.toLowerCase()];
                        const symbolSpan = createHTMLElement('span', ['condition', 'symbol'], symbol);

                        let spanHolder = createHTMLElement('span', 'condition');

                        const nameSpan = createHTMLElement('span', 'forecast-data', data.name);
                        const degrees = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}${symbols.degrees}`;
                        const degreesSpan = createHTMLElement('span', 'forecast-data', degrees);
                        const conditionSpan = createHTMLElement('span', 'forecast-data', data.forecast.condition);

                        spanHolder = appendChildrenToParent(spanHolder, [nameSpan, degreesSpan, conditionSpan]);
                        forecastDiv = appendChildrenToParent(forecastDiv, [symbolSpan, spanHolder]);

                        current.appendChild(forecastDiv);

                        loadUpcomingLocationWeatherInfo(location.code);
                    });
            })
    };

    function loadUpcomingLocationWeatherInfo(code) {
        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
            .then(checkStatus)
            .then(showUpcomingLocationWeatherInfo)
    }

    function showUpcomingLocationWeatherInfo(data) {
        const forecastDiv = createHTMLElement('div', 'forecast-info');

        data.forecast.forEach(day => {
            let spanHolder = createHTMLElement('span', 'upcoming');

            const symbol = symbols[day.condition.toLowerCase()] || symbols.partlySunny;
            const symbolSpan = createHTMLElement('span', 'symbol', symbol);
            const degrees = `${day.low}${symbols.degrees}/${day.high}${symbols.degrees}`;
            const degreesSpan = createHTMLElement('span', 'forecast-data', degrees);
            const conditionSpan = createHTMLElement('span', 'forecast-data', day.condition);

            spanHolder = appendChildrenToParent(spanHolder, [symbolSpan, degreesSpan, conditionSpan]);
            forecastDiv.appendChild(spanHolder);
        });

        upcoming.appendChild(forecastDiv);
    }

    function createHTMLElement(tagName, className, textContent) {
        const currentElement = document.createElement(tagName);

        if (typeof className === 'string') {
            currentElement.classList.add(className);

        } else if (typeof className === 'object') {
            currentElement.classList.add(...className);
        }

        if (textContent) {
            currentElement.textContent = textContent;
        }

        return currentElement;
    }

    function appendChildrenToParent(parent, children) {
        children.forEach(child => parent.appendChild(child));

        return parent;
    }
}

attachEvents();