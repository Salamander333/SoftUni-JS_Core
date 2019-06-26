function solve(params) {
    let input = params[0].match(/\w+/g);
    let words = {};

    input.forEach(element => {
        if (!words.hasOwnProperty(element)) {
            words[element] = 0;
        }

        words[element]++;
    });

    let result = JSON.stringify(words);
    console.log(result);
}

solve(["Far too slow, you're far too slow."]);
solve(["JS devs use Node.js for server-side JS.-- JS for devs"]);