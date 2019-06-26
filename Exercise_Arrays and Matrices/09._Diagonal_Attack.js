function solve(matrix) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    matrix = matrix.map(row => row.split(' '));

    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += +matrix[i][i];
    }
    for (let i = 0; i < matrix.length; i++) {
        rightDiagonalSum += +matrix[i][(matrix.length - 1) - i]
    }

    if (leftDiagonalSum === rightDiagonalSum) {
        for (let leftIndex = 0, rightIndex = matrix.length - 1; leftIndex < matrix.length; leftIndex++,  rightIndex--) {
            for (let i = 0; i < matrix.length; i++) {
                if (leftIndex !== i && rightIndex !== i) {
                    matrix[leftIndex][i] = leftDiagonalSum;
                }
            }
        }
    }

    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

solve(['5 3 12 3 1',
       '11 4 23 2 5',
       '101 12 3 21 10',
       '1 4 5 2 2',
       '5 22 33 11 1']
);

solve(['1 1 1',
       '1 1 1',
       '1 1 0']
);