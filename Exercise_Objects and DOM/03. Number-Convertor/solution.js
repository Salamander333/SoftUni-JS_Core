function solve() {
    let selectTo = document.getElementById('selectMenuTo');
    let selectToBinary = document.createElement('option');
    let selectToHex = document.createElement('option');
    selectToBinary.value = 'binary';
    selectToBinary.text = 'Binary';
    selectToHex.value = 'hexadecimal';
    selectToHex.text = 'Hexadecimal';
    selectTo.add(selectToBinary);
    selectTo.add(selectToHex);

    let button = document.getElementsByTagName('button')[0].addEventListener('click', onclick);

    function onclick(){
        let num = document.getElementById('input').value;
        let selectedOption = selectTo.value;
        let result = document.getElementById('result');

        switch (selectedOption) {
            case 'binary':
                result.value = (+num).toString(2);
                break;
            case 'hexadecimal':
                    result.value = (+num).toString(16).toUpperCase();
                break;
            default:
                break;
        }
    }
}