function solve(isFundamentals, isAdvanced, isApplications, form) {
    let price = 0;

    if (isAdvanced && isFundamentals) {
        let advPrice = 180 - (180 * 0.1);
        if (isApplications) {
            price = 170 + advPrice + 190;
            price -= price * 0.06;
        } 
        else {
            price = 170 + advPrice;
        }
    }
    else {
        if (isFundamentals) {
            price += 170;
        }
        if (isAdvanced) {
            price += 180;
        }
        if (isApplications) {
            price += 190;
        }
    }

    if (form === 'online') {
        price -= (price * 0.06);
    }

    console.log(Math.round(price));
}

solve(true, false, false, "online");