function solve(input) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const carriages = [
        { type: 'hatchback', color: input.color },
        { type: 'coupe', color: input.color }
    ];

    input.wheelsize % 2 !== 0 ? input.wheelsize : input.wheelsize--;

    const car = {
        model: input.model,
        engine: engines.filter(e => e.power >= input.power)[0],
        carriage: carriages.filter(e => e.type === input.carriage)[0],
        wheels: Array(4).fill(input.wheelsize)
    }

    return car;
}

console.log(
    solve(
        {
            model: 'VW Golf II',
            power: 90,
            color: 'blue',
            carriage: 'hatchback',
            wheelsize: 14
        }
    )
);