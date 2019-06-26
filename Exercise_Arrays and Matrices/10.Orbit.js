function solve(params) {
    let width = +params[0];
    let height = +params[1];
    let starX = +params[2];
    let starY = +params[3];

    let matrix = [];
    for (let i = 0; i < height; i++) {
        matrix[i] = [];
    }

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starX), Math.abs(col - starY)) + 1;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

solve([5, 5, 2, 2]);