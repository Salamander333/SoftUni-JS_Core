function solve(input) {
    input.sort((a, b) => {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        if (a > b) return 1;
        if (a < b) return -1;
    })

    for(let n of input) {
        console.log(n);
    }
}

solve(['test', 
'Deny', 
'omen', 
'Default']
);