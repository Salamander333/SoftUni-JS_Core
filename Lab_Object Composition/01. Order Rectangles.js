function solve(input) {
    function rectFactory(w, h) {
        let rect = {
            width: w,
            height: h,
            area: () => rect.width * rect.height,

            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        }

        return rect;
    }

    let rects = [];
    for(let [width, height] of input) {
        let rect = rectFactory(width, height);
        rects.push(rect);
    }

    rects.sort((a, b) => a.compareTo(b));
    return rects;
}

solve([[1, 20], [20, 1], [5, 3], [5, 3]]);