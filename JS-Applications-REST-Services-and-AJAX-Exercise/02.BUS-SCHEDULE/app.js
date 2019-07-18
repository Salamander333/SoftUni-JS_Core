function solve() {
    let url = `https://judgetests.firebaseio.com/schedule/`;
    let currentStop = {
        name: 'depot',
        next: 'depot'
    };
    
    let stopInfo = document.getElementsByClassName('info')[0];
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');

    function depart() {
        let x = url + currentStop.next + '.json';
        
        fetch(x)
            .then((request) => request.json())
            .then((data) => getStation(data));
    }

    function arrive() {
        stopInfo.textContent = `Arriving at ${currentStop.name}`;
        arriveButton.disabled = true;
        departButton.disabled = false;
    }

    function getStation(data) {
        currentStop.name = data.name;
        currentStop.next = data.next;

        stopInfo.textContent = `Next stop ${currentStop.name}`;
        arriveButton.disabled = false;
        departButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();