function solve() {
    let firstElement;
    let secondElement;
    let resultElement;

    return {
        init: function (selector1, selector2, resultSelector) {
            firstElement = selector1;
            secondElement = selector2;
            resultElement = resultSelector;
        },

        add: () => { resultElement.value = +firstElement.value + +secondElement.value },
        subtract: () => { resultElement.value = +firstElement.value - +secondElement.value }
    }
}

let magic = solve();
magic.init(document.getElementById("num1"), document.getElementById("num2"), document.getElementById("result"));

let sumButton = document.getElementById("sumButton");
sumButton.addEventListener("click", magic.add);

let subtractButton = document.getElementById("subtractButton");
subtractButton.addEventListener("click", magic.subtract);