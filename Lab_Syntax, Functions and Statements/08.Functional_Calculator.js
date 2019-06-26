function solve(num1, num2, operator) {
    let calc = (num1, num2, operator) => operator(num1, num2);

    let add = (num1, num2) => num1 + num2;
    let substract = (num1, num2) => num1 - num2;
    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;

    switch (operator) {
        case '+': return calc(num1, num2, add);
        case '-': return calc(num1, num2, substract);
        case '*': return calc(num1, num2, multiply);
        case '/': return calc(num1, num2, divide);
    }
}

console.log(solve(2, 4, '+'));
console.log(solve(3, 3, '/'));
console.log(solve(18, -1, '*'));


