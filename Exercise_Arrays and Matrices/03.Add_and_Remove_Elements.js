function solve(input) {
    let number = 0;
    let array = [];
    for(let command of input) {
        if (command === 'add') {
            number++;
            array.push(number);
        }
        else if (command === 'remove') {
            number++;
            array.pop();
        }
    }

    if (array.length === 0) {
        console.log('Empty');
    } 
    else {
        for(let n of array) {
            console.log(n);
        }
    }
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);