function solve(input) {
    let towns = [];

    for (let i = 1; i < input.length; i++) {
        let params = input[i].split(/\s*\|\s*/);
        let town = {};
        town["Town"] = params[1];
        town["Latitude"] = Number(params[2]);
        town["Longitude"] = Number(params[3]);

        towns.push(town);
    }

    let result = JSON.stringify(towns);
    console.log(result);
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);