function solve(fruit, weightInGrams, pricePerKg) {
    let weightInKG = weightInGrams / 1000;
    let result = weightInKG * pricePerKg;

    return `I need $${result.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`;
}

console.log(solve('orange', 2500, 1.80));
console.log(solve('apple', 1563, 2.35));