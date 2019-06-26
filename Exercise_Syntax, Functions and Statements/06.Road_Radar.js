function solve(input) {
    let speed = input[0];
    let speedLimit = getSpeedLimit(input[1]);

    function getSpeedLimit(area) {
        switch (area) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    if(speed <= speedLimit) {
        return console.log();
    } 
    else if(speed - speedLimit <= 20) {
        return console.log('speeding');
    }
    else if(speed - speedLimit <= 40) {
        return console.log('excessive speeding');
    }
    else if(speed - speedLimit > 40) {
        return console.log('reckless driving');
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);