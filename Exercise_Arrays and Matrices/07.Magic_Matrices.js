function solve(input) {
    let sum = 0;
    input[0].forEach(element => {
        sum += element;
    });

    let rowMagic = false;
    let colMagic = false;

    for (let i = 0; i < input.length; i++) {
        let rowSum = 0;
        input[i].forEach(element => {
            rowSum += element;
        });
        if (rowSum !== sum) {
            return console.log('false');
        }

        rowMagic = true;
    }

    for (let i = 0; i < input[0].length; i++) {
        let colSum = 0;
        for (let a = 0; a < input.length; a++) {
            colSum += input[i][a];
        }
        if (colSum !== sum) {
            return console.log('false');
        }

        colMagic = true;
    }

    if (rowMagic && colMagic) {
        console.log('true');
    }
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );