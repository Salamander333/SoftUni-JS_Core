function solve(input) {
    let totalIncome = 0;
    
    for (let i = 0; i < input.length; i++) {
        let order = input[i].split(', ');
        let money = +order[0];
        let price = 0;
        
        if (order[1] === 'coffee') {
            if (order[2] === 'caffeine') {
                price += 0.80;
            } else if (order[2] === 'decaf') {
                price += 0.90;
            }
            if (order[3] === 'milk') {
                price += (price * 0.1).toFixed(1);
            } else if (order[3] > 0) {
                price += 0.10;
            }
            if (money >= price) {
                console.log(`You ordered coffee. Price: ${price.toFixed(2)}$ Change: ${(money - price).toFixed(2)}$`);
                totalIncome += price;
            } else {
                console.log(`Not enough money for coffee. Need ${(price - money).toFixed(2)}$ more.`);
            }

        } else if (order[1] === 'tea') {
            price = 0.80;
            if (order[2] === 'milk') {
                price += (price * 0.1).toFixed(1);
            } else if (order[2] > 0) {
                price += 0.10;
            }
            if (money >= price) {
                console.log(`You ordered tea. Price: ${price.toFixed(2)}$ Change: ${(money - price).toFixed(2)}$`);
                totalIncome += price;
            } else {
                console.log(`Not enough money for tea. Need ${(price - money).toFixed(2)}$ more.`);
            }
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}

solve(['8.00, coffee, decaf, 4',
'1.00, tea, 2']
);