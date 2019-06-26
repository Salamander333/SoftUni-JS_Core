function solve(num) {
    let sum = num;
    
    function add(nextNumber) {
        sum += nextNumber;
        return add;
    }
    
    add.toString = function () {
        return sum;
    };
    
    return add;
}

console.log(solve(1)(6)(-3));