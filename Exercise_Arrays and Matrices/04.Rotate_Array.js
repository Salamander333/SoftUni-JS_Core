function solve(input) {
    let amountOfRotations = +input.pop();

    if (input.length === 1) {
        amountOfRotations = 0;
    }

    for (let i = 0; i < amountOfRotations % input.length; i++) {
        let x = input.pop();
        input.unshift(x);
    }

    console.log(input.join(' '));
}

solve(['1', 
'2', 
'3', 
'4', 
'2']
);

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);