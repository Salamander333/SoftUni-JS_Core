function solve(array, cutSize) {
    function createMatrix(part) {
        let matrix = [];

        for (let i = 0; i < part.length; i += cutSize) {
            let row = part.slice(i, i + cutSize);
            matrix.push(row);
        }

        return matrix;
    }

    function findProduct(part) {
        let result = [];

        for (let i = 0; i < part.length; i++) {
            let product = 1;
            for (let j = 0; j < part[i].length; j++) {
                product *= part[i][j];
            }

            result.push(product);
        }

        return result;
    }

    function fight(firstGiant, secondGiant) {
        const damage = Math.min(...array);
        const highestNumber = Math.max(...array);

        let round = 1;

        while (firstGiant > highestNumber && secondGiant > highestNumber && damage !== 0) {
            firstGiant -= damage;
            secondGiant -= damage;
            round++;
        }

        if (firstGiant > secondGiant) {
            return `First Giant defeated Second Giant with result ${firstGiant} - ${secondGiant} in ${round} rounds`
        } 
        else if (firstGiant < secondGiant) {
            return `Second Giant defeated First Giant with result ${secondGiant} - ${firstGiant} in ${round} rounds`
        }
        else {
            return `Its a draw ${firstGiant} – ${secondGiant}`
        }
    }

    let firstPart = array.slice(0, array.length / 2);
    let secondPart = array.slice(array.length / 2);

    let firstPartMatrix = createMatrix(firstPart);
    let secondPartMatrix = createMatrix(secondPart);

    let firstPartProdcut = findProduct(firstPartMatrix);
    let secondPartProdcut = findProduct(secondPartMatrix);

    let firstGiant = firstPartProdcut.reduce((a, b) => a + b);
    let secondGiant = secondPartProdcut.reduce((a, b) => a + b);

    if (cutSize === 0) {
        firstGiant = 0;
        secondGiant = 0;
    }

    console.log(fight(firstGiant, secondGiant));
}

solve([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);