function solve(steps, stepLenght, speed) {
    let distanceInMeters = steps * stepLenght;
    let speedInSeconds = speed / 3600;

    let secondsElapsed = Math.round((distanceInMeters / 1000) / speedInSeconds);
    let breaksInMinutes = Math.floor(distanceInMeters / 500);

    let hoursElapsed = 0;
    let minutesElapsed = breaksInMinutes;

    while(secondsElapsed >= 60) {
        secondsElapsed -= 60;
        minutesElapsed++;
    }

    while(minutesElapsed >= 60) {
        minutesElapsed -= 60;
        hoursElapsed++;
    }

    let hours = '';
    if(hoursElapsed < 10) {hours = `0${hoursElapsed}`} else {hours = hours};

    let minutes = '';
    if(minutesElapsed < 10) {minutes = `0${minutesElapsed}`} else {minutes = minutesElapsed};

    let seconds = '';
    if(secondsElapsed < 10) {seconds = `0${secondsElapsed}`} else {seconds = secondsElapsed};

    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);