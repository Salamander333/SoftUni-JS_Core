function getData () {
	let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);

	let peopleInP = document.getElementById('peopleIn').getElementsByTagName('p')[0];
	let blacklistP = document.getElementById('blacklist').getElementsByTagName('p')[0];
	let peopleOutP = document.getElementById('peopleOut').getElementsByTagName('p')[0];

	let peopleIn = [];
	let blacklist = [];
	let peopleOut = [];

	for (let i = 0; i < input.length - 1; i++) {
		let person = {
			firstName: input[i].firstName,
			lastName: input[i].lastName
		}

		let action = input[i].action;

		switch (action) {
			case 'peopleIn':
				let checkIfBlacklist = blacklist.findIndex(x => x.firstName === person.firstName && x.lastName === person.lastName);
				if (checkIfBlacklist === -1) {
					peopleIn.push(person);
				}
				break;
			case 'peopleOut':
				let checkIfIn = peopleIn.findIndex(x => x.firstName === person.firstName && x.lastName === person.lastName);
				if (checkIfIn !== -1) {
					peopleIn.splice(checkIfIn, 1);
					peopleOut.push(person);
				}
				break;
			case 'blacklist':
				let check = peopleIn.findIndex(x => x.firstName === person.firstName && x.lastName === person.lastName);
				if (check === -1) {
					blacklist.push(person);
				}
				else {
					peopleIn.splice(checkIfIn, 1);
					peopleOut.push(person);
					blacklist.push(person);
				}
				break;
		}
	}

	let sortCriteria = input[input.length - 1].criteria;
	let selectedSection = input[input.length - 1].action;
	
	if (sortCriteria === 'firstName' || sortCriteria === 'lastName') {
		if (selectedSection === 'peopleIn') {
			peopleIn.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
		} 
		else if (selectedSection === 'blacklist') {
			blacklist.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
		}
		else if (selectedSection === 'peopleOut') {
			peopleOut.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
		}
	}

	peopleIn.forEach(x => peopleInP.textContent += JSON.stringify(x) + ' ');
	blacklist.forEach(x => blacklistP.textContent += JSON.stringify(x) + ' ');
	peopleOut.forEach(x => peopleOutP.textContent += JSON.stringify(x) + ' ');

	console.log(peopleOutP)
}