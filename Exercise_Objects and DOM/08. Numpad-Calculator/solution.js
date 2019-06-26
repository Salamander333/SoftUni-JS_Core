function solve() {
    let buttons = document.getElementsByTagName('button');
    for(let b of buttons) {
        switch (b.value) {
            case '/':
            case '*':
            case '-':
            case '+':
                b.addEventListener('click', addOperator);
                break;
            case '.':
                b.addEventListener('click', addPoint);
                break;
            case '=':
                b.addEventListener('click', getResult);
                break;
            case 'Clear':
                b.addEventListener('click', clear);
                break;
            default:
                b.addEventListener('click', addNumber);
                break;
        }
        
    }

    let expressionOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');

    function addOperator() {
        expressionOutput.textContent += ` ${this.value} `;
    }

    function addPoint() {
        expressionOutput.textContent += '.';
    }

    function addNumber() {
        expressionOutput.textContent += this.value;
    }

    function getResult() {
        let expression = expressionOutput.textContent.split(' ');
        if (expression.length % 3 !== 0) {
            resultOutput.textContent = 'NaN';
        }
        else {
            let n1 = +expression[0];
            let operator = expression[1];
            let n2 = +expression[2];

            let result;

            switch (operator) {
                case '/':
                    result = n1 / n2;
                    break;
                case '*':
                    result = n1 * n2;
                    break;
                case '-':
                    result = n1 - n2;
                    break;
                case '+':
                    result = n1 + n2;
                    break;
            }

            resultOutput.textContent = result;
        }
    }

    function clear() {
        expressionOutput.textContent = '';
        resultOutput.textContent = '';
    }
}