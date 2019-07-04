function solve(selector) {
    let node = document.querySelector(selector);
    let target = node;
    console.log(target);
    for (let i = 0; i < target.childElementCount; i++) {
        if (target.childElementCount > 0) {
            target.classList.add("highlight");
            let elements = target.getElementsByTagName("*");
            for (let j = 0; j < elements.length; j++) {
                if (elements[j].childElementCount > 0) {
                    target = elements[j];
                    i = -1;
                }
            }
        }
    }

    if (target.getElementsByTagName("*").length === 0) {
        target.classList.add("highlight");
    } else {
        target.getElementsByTagName("*")[0].classList.add("highlight");
    }
    
}

solve('#content');