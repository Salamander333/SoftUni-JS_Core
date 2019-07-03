function solve(input) {
    let carFactoryF = function () {
        let cars = {};

        return {
            create: (name) => cars[name] = {},
            inherit: (child, parent) => Object.setPrototypeOf(cars[child], cars[parent]),
            set: (name, key, value) => cars[name][key] = value,
            print: (name) => {
                let carInfo = [];
                for (let key in cars[name]) {
                    carInfo.push(`${key}:${cars[name][key]}`);
                }
                console.log(carInfo.join(", "));
            }
        }
    }

    let carFactory = carFactoryF();

    for (let element of input) {
        let [command, ...args] = element.split(" ");
        let name = args[0];

        switch (command) {
            case 'create':
                carFactory.create(name);
                if (args[1] === "inherit") {
                    carFactory.inherit(name, args[2]);
                }
                break;

            case 'set':
                carFactory.set(name, args[1], args[2]);
                break;

            case 'print':
                carFactory.print(name);
                break;
        }
    }
}

solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);