function encodeAndDecodeMessages() {
    function encode(params) {
        let message = input.value;
        let result = '';

        for (let i = 0; i < message.length; i++) {
            let char = message[i].charCodeAt(0) + 1;
            let letter = String.fromCharCode(char)
            result += letter;
        }

        input.value = '';
        output.value = result;
    }

    function decode(params) {
        let message = input.value;
        let result = '';

        for (let i = 0; i < message.length; i++) {
            let char = message[i].charCodeAt(0) - 1;
            let letter = String.fromCharCode(char)
            result += letter;
        }

        output.value = result;
    }

    let input = document.getElementsByTagName('textarea')[0];
    let output = document.getElementsByTagName('textarea')[1];

    let sendButton = document.getElementsByTagName("button")[0].addEventListener('click', encode);
    let receiveButton = document.getElementsByTagName("button")[1].addEventListener('click', decode);
}