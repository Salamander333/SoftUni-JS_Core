function attachEvents() {
    function loadPhonebook() {
        clearPhoneBook();
        
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                let contacts = Object.values(data);
                for (let contact of contacts) {
                    let name = contact.person;
                    let number = contact.phone;

                    let deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';

                    let li = document.createElement('li');
                    li.textContent = `${name}: ${number} `;
                    li.appendChild(deleteButton);

                    document.getElementById('phonebook').appendChild(li);
                };
            })
    };

    function createContact() {
        clearPhoneBook();

        const name = document.getElementById('person');
        const number = document.getElementById('phone');

        if (name.value && number.value) {
            let currentPerson = {
                person: name.value,
                phone: number.value
            };

            fetch(url, {
                method: 'post',
                body: JSON.stringify(currentPerson)
            })
                .then(res => res.json());
        }

        loadPhonebook();

        name.value = '';
        number.value = '';
    }

    function clearPhoneBook() {
        document.getElementById('phonebook').innerHTML = '';
    }

    let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

    let loadButton = document.getElementById('btnLoad');
    loadButton.addEventListener('click', loadPhonebook);

    let createButton = document.getElementById('btnCreate');
    createButton.addEventListener('click', createContact);
}

attachEvents();