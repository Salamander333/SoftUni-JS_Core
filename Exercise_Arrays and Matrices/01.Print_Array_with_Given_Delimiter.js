function solve(input) {
    let seperator = input[input.length - 1];
    input.pop();
    let result = input.join(seperator);
    console.log(result);
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
);

solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']
);