function solve(params) {
    let foods = {};

    for (let i = 0; i < params.length; i += 2) {
        let name = params[i];
        let calories = +params[i + 1];
        foods[name] = calories
    }

    console.log(foods);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);