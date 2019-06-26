function solve(input) {
    num = +input[0];

    function calculate(num, func) {
        switch (func) {
            case 'chop': return num / 2;
            case 'dice': return Math.sqrt(num);
            case 'spice': return num + 1;
            case 'bake': return num * 3;
            case 'fillet': return num - (num * 0.2);
        }
    }

    for (let index = 1; index < input.length; index++) {
        num = +calculate(num, input[index]);
        console.log(num);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);