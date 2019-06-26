function attachEventsListeners() {
    let buttons = document.querySelectorAll('div input:last-child');

    for(let button of buttons) {
        button.addEventListener('click', (x) => {
            let field = x.target.parentNode.children[1];
            let value = +field.value;
            let id = field.id;

            let result = [];

            switch (id) {
                case 'days':
                    result['days'] = value;
                    result['hours'] = value * 24;
                    result['minutes'] = value * 1440;
                    result['seconds'] = value * 86400;
                    break;
                case 'hours':
                    result['days'] = value / 24;
                    result['hours'] = value;
                    result['minutes'] = value * 60;
                    result['seconds'] = value * 3600;
                    break;
                case 'minutes':
                    result['days'] = value / 1440;
                    result['hours'] = value / 60;
                    result['minutes'] = value;
                    result['seconds'] = value * 60;
                    break;
                case 'seconds':
                    result['days'] = value / 86400;
                    result['hours'] = value / 3600;
                    result['minutes'] = value / 60;
                    result['seconds'] = value;
                    break;
            }

            for(let b of buttons) {
                let textField = b.parentNode.children[1];
                textField.value = result[textField.id];
            }

        });
    }
}