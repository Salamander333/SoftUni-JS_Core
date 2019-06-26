function solve(...params) {
    let types = [];
    for (let param of params) {
        let type = typeof param;
        console.log(type + ': ' + param);
        if (!types.some(x => x.name === type)) {
            types.push({name: type, value: 1})
        } else {
            types.find(x => x.name === type).value++;
        }
    }

    types = types.sort((a, b) => (b.name - a.name) || b.value - a.value);
    for (let type of types) {
        console.log(type.name + ' = ' + type.value);
    }
}

solve({ name: 'bob'}, 3.333, 9.999);