function solve(arr, type) {
    if (type === 'asc') {
        arr.sort((a, b) => a - b);
    } else if(type === 'desc') {
        arr.sort((a, b) => b - a);
    }

    return arr;
}

solve([11, 4, 6, 3, 4343, 1, 2, 4, 33, 55, 777, 8888], 'asc');