function solve(arr) {
    function sum(arr) {
        let result = 0;
        arr.forEach(element => {result += element});
        return result;
    }

    function sumOfInverseValuse(arr) {
        let result = 0;
        arr.forEach(element => result += (1 / element));
        return result;
    }

    function concat(arr) {
        let result = '';
        arr.forEach(element => result += element);
        return result;
    }

    console.log(sum(arr));
    console.log(sumOfInverseValuse(arr));
    console.log(concat(arr));
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);