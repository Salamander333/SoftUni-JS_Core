function solve(points) {
    let x1 = +points[0];
    let y1 = +points[1];
    let x2 = +points[2];
    let y2 = +points[3];

    function checkDistance(x1, y1, x2, y2) {
        let a = x1 - x2;
        let b = y1 - y2;
        let distance = Math.sqrt((a * a) + (b * b));

        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    checkDistance(x1, y1, 0, 0);
    checkDistance(x2, y2, 0, 0);
    checkDistance(x1, y1, x2, y2);
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);