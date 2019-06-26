function solve() {
    let inputElement = document.getElementsByTagName('input')[0];

    let buttonElement = document.getElementsByTagName('button')[0];
    let rows = document.getElementsByTagName('li');

    buttonElement.addEventListener('click', addToList);

    function addToList(){
        let input = inputElement.value.toUpperCase();
        let charCode = input.charCodeAt(0);
        if (charCode <= 90 && charCode >= 65) {
            let rowNum = charCode - 65;
            let name = input.charAt(0) + input.slice(1).toLowerCase();
            if (rows[rowNum].textContent) {
                rows[rowNum].textContent += ', ' + name;
            }
            else {
                rows[rowNum].textContent += name;
            }
            
        }
    }
}