function solve(params) {
    let towns = {};
    for (let i = 0; i < params.length; i+=2) {
        let name = params[i];
        let income = Number(params[i + 1]);

        if (!towns.hasOwnProperty(name)) {
            towns[name] = 0;
        }

        towns[name] += income;
    }

    let result = JSON.stringify(towns);
    console.log(result);
}

solve(['Sofia',
    20,
    'Varna',
    3,
    'Sofia',
    5,
    'Varna',
    4]
    );