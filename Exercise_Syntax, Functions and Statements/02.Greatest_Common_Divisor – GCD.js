function solve(num1, num2) {
    let n1 = Number(num1);
    let n2 = Number(num2);

    while (n1 !== n2) {
        if (n1 > n2) {
            n1 -= n2;
        }
        else {
            n2 -= n1;
        }
    }

    console.log(n1);
}

solve(15, 6);
solve(2154, 458);