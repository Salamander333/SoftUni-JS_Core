function getInfo() {
    let id = document.getElementById('stopId').value;
    let stopName = document.getElementById('stopName');
    let busesList = document.getElementById('buses');
    

    fetch(`https://judgetests.firebaseio.com/businfo/${id}.json`)
     .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response.json();
     })
     .then((data) => {
        stopName.textContent = '';
        busesList.innerHTML = '';
        stopName.textContent = data.name;
        for(let bus in data.buses) {
            let x = document.createElement('li');
            x.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`
            busesList.appendChild(x);
        };
     })
     .catch((error) => { stopName.textContent = 'Error'; busesList.innerHTML = '' });
}