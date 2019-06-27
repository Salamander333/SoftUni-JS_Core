const isOddOrEven = require("./02.Even_or_Odd");

const assert = require("chai").assert;

describe("Tests", function() {
    it("Should return unidentified", function(){
        assert.isUndefined(isOddOrEven(333));
        assert.isUndefined(isOddOrEven(true));
        assert.isUndefined(isOddOrEven([]));
        assert.isUndefined(isOddOrEven({}));
    });
    
    it("Should return even", function(){
        const expected = "even";
        const actual = isOddOrEven("even");

        assert.equal(actual, expected);
    });

    it("Should return odd", function(){
        const expected = "odd";
        const actual = isOddOrEven("odd");

        assert.equal(actual, expected);
    });
});