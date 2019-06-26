function solve() {
	let input = document.getElementById('input').value;
	let array = input.split('');
	let sum = 0;

	while (input.length > 1) {
		for (let char of input) {
			sum += +char;
		}

		input = sum.toString();
		sum = 0;
	}

	let slicedText = array.slice(+input, array.length - +input);

	let result = slicedText
        .split(/([\d]{8})/g)
        .filter(x => x)
        .map(x => convertBinaryToChar(x))
        .filter(c => /[a-zA-Z ]+/g.test(c))
        .join('');

	let resultTextNode = document.getElementById('resultOutput');
	resultTextNode.textContent = result;
}
