function solve(params) {
    let towns = {}

    params.forEach(element => {
        let x = element.split(' <-> ');
        let town = x[0];
        let pop = +x[1];

        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }

        towns[town] += pop;
    });

    for(var prop in towns) {
        console.log(prop + " : " + towns[prop])
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
    );
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
    );