function sumStringLenght(string1, string2, string3) {
    let sumLenght = 0;
    let averageLenght = 0;
    
    sumLenght = string1.length + string2.length + string3.length;
    averageLenght = Math.floor(sumLenght / 3);

    console.log(sumLenght);
    console.log(averageLenght);
}

sumStringLenght('chocolate', 'ice cream', 'cake');