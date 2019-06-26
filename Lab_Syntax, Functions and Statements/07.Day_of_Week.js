function solve(day) {
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let index = week.indexOf(day);

    if (index === -1) {
        console.log('error');
    }
    else {
        console.log(index + 1);
    }
}

solve('Monday');
solve('Friday');
solve('asd');