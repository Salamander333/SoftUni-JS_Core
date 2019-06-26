function solve() {
    let string = document.getElementById('string').value;
    let text = document.getElementById('text').value;
    let result = document.getElementById('result');

    let degreeRegex = /(north|east)[\s\S]*?(\d{2})[^,]*,[^,]*?(\d{6})/gi
    let northDegrees;
    let eastDegrees;

    let match = degreeRegex.exec(text);
    while (match) {
        if (match[1].toLowerCase() === 'north') {
            northDegrees = `${match[2]}.${match[3]} N`;
        }
        else if(match[1].toLowerCase() === 'east') {
            eastDegrees = `${match[2]}.${match[3]} E`;
        }

        match = degreeRegex.exec(text);
    }

    let messagePattern = new RegExp(`${string}(.+)${string}`, "gi");
    let message = `Message: ${messagePattern.exec(text)[1]}`;

    let northParagraph = document.createElement('p');
    northParagraph.textContent = northDegrees;
    result.appendChild(northParagraph);

    let eastParagraph = document.createElement('p');
    eastParagraph.textContent = eastDegrees;
    result.appendChild(eastParagraph);

    let messageParagraph = document.createElement('p');
    messageParagraph.textContent = message;
    result.appendChild(messageParagraph);
}