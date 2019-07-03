function solve(input) {
    let command = (function processor() {
        let arr = [];
        return {
            add: (elem) => arr.push(elem),
            remove: (elem) => arr = arr.filter(item => item !== elem),
            print: () => console.log(arr.join(','))
        }
    })();

    input.forEach(element => {
        let tokens = element.split(" ").filter(i => i !== "");
        if (tokens[0] === "print") {
            command.print();
        } else {
            command[tokens[0]](tokens[1]);
        }
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

