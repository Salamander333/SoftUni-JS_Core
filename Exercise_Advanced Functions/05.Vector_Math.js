(() => {
    let add = (a, b) => [a[0] + b[0], a[1] + b[1]];
    let multiply = (vec1, scalar) => [vec1[0] * scalar, vec1[1] * scalar];
    let length = (a) => Math.sqrt((a[0] * a[0]) + (a[1] * a[1]));
    let dot = (a, b) => (a[0] * b[0]) + (a[1] * b[1]);
    let cross = (a, b) =>  (a[0] * b[1]) - (b[0] * a[1]);

    return {
        add,
        multiply,
        length,
        dot,
        cross
    };
})();

add([1, 1], [1, 0]);