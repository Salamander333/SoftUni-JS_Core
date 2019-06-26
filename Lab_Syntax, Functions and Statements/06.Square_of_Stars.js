function solve(n) {
    let num = +n;

    if (isNaN(num)) {
        num = 5
    }
    
    let rowString = '* '.repeat(num);
    //rowString = rowString.slice(0, rowString.length);

    for (let row = 0; row < num; row++) {
        console.log(rowString);
    }

}

solve();
solve(6);
solve(2);