function solve() {
    let quickCheckButton = document.getElementsByTagName('button')[0].addEventListener('click', checkFields);
    let clearButton = document.getElementsByTagName('button')[1].addEventListener('click', clearFields);

    function clearFields() {
        let inputFields = document.getElementsByTagName('input');

        for (let i = 0; i < inputFields.length; i++) {
            inputFields[i].value = '';
        }

        document.getElementsByTagName('table')[0].style.border = "none";
        document.getElementsByTagName('p')[0].textContent = '';
    }

    function checkFields() {
        let fields = document.getElementsByTagName('input');
        let table = document.getElementsByTagName('table')[0];
        let result = document.getElementsByTagName('p')[0];

        let rowsCorrect;
        let colsCorrect;

        for (let i = 0; i < 9; i+=3) {
            let firstNumber = fields[i].value;
            let secondNumber = fields[i + 1].value;
            let thirdNumber = fields[i + 2].value;

            if (firstNumber !== secondNumber && firstNumber !== thirdNumber && secondNumber !== thirdNumber) {
                rowsCorrect = true;
            } 
            else {
                rowsCorrect = false;
            }
        }
        for (let i = 0; i < 3; i++) {
            let firstNumber = fields[i].value;
            let secondNumber = fields[i + 3].value;
            let thirdNumber = fields[i + 6].value;

            if (firstNumber !== secondNumber && firstNumber !== thirdNumber && secondNumber !== thirdNumber) {
                colsCorrect = true;
            } 
            else {
                colsCorrect = false;
            }
        }

        if (rowsCorrect && colsCorrect) {
            table.style.border = "2px solid green";
            result.style.color = 'green';
            result.textContent = 'You solve it! Congratulations!';
        }
        else {
            table.style.border = "2px solid red";
            result.style.color = 'red';
            result.textContent = 'NOP! You are not done yet...';
        }
    }
}