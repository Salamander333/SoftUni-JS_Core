function solve(input) {
    let validMethod = 
        input.method === "GET" ||
        input.method === "POST" ||
        input.method === "DELETE" ||
        input.method === "CONNECT";

    let validURI = false;

    if (input.hasOwnProperty('uri')) {
        if (input.uri.match(/^\*$|^([a-z\d\.]+)$/g)) {
            validURI = true;
        }
    }

    let validVersion =
        input.version === 'HTTP/0.9' ||
        input.version === 'HTTP/1.0' ||
        input.version === 'HTTP/1.1' ||
        input.version === 'HTTP/2.0';

    let validMessage = false;

    if (input.hasOwnProperty('message')) {
        const pattern = /[<>\\&'"]/g;
        validMessage = !pattern.test(input.message);
    }
    
    if (!validMethod) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (!validURI) {
        throw new Error('Invalid request header: Invalid URI');
    } else if (!validVersion) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (!validMessage) {
        throw new Error('Invalid request header: Invalid Message');
    }
    
        return input;
}

console.log(solve(
    {
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    }
));