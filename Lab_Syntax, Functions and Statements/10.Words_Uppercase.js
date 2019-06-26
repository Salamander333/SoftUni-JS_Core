function solve(input) {
    let words = input.split(' ');

    let wordsClean = [];
    words.forEach(element => {
        if (element.includes('.')) {
            var result = element.split('.');
            wordsClean.push(result[0]);
            if(result[1] !== '') {
                wordsClean.push(result[1]);
            }
        }
        else if (element.includes(',')) {
            var result = element.split(',');
            wordsClean.push(result[0]);
            if(result[1] !== '') {
                wordsClean.push(result[1]);
            }
        }
        else if (element.includes('!')) {
            var result = element.split('!');
            wordsClean.push(result[0]);
            if(result[1] !== '') {
                wordsClean.push(result[1]);
            }
        }
        else if (element.includes('?')) {
            var result = element.split('?');
            wordsClean.push(result[0]);
            if(result[1] !== '') {
                wordsClean.push(result[1]);
            }
        }
        else if (element.includes(' ')) {
            var result = element.split(' ');
            wordsClean.push(result[0]);
            if(result[1] !== '') {
                wordsClean.push(result[1]);
            }
        }
        else {
            wordsClean.push(element);
        }
    });

    let result = [];
    wordsClean.forEach(element => result.push(element.toUpperCase()));
    console.log(result.join(", "));
}

solve('Hi, how are you?');
solve('hello');
solve('Functions in JS can be nested, i.e. hold other functions');