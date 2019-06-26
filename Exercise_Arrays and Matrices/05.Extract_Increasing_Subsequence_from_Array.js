function solve(input) {
    let lastNum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < input.length; i++) {
        if (+input[i] >= lastNum) {
            lastNum = +input[i];
            console.log(lastNum);
        }
    }
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );