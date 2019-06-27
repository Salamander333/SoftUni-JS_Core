const lookupChar = require('./03.Char_Lookup');

const assert = require('chai').assert;

describe('Tests', function () {
    it("Should return undefined when first parameter is not a string", function () {
        assert.isUndefined(lookupChar(true, 1));
    });

    it("Should return undefined when second parameter is not a number", function () {
        assert.isUndefined(lookupChar("asd", "asd"));
    });

    it("Should return undefined when second parameter is not a integer", function () {
        assert.isUndefined(lookupChar("asd", 1.1));
    });

    it("Should return incorrect index when index is equal to string length", function () {
        let expected = "Incorrect index";
        let actual = lookupChar("test", 4);

        assert.equal(actual, expected);
    });

    it("Should return incorrect index when index is negative number", function () {
        let expected = "Incorrect index";
        let actual = lookupChar("asd", -1);

        assert.equal(actual, expected);
    });

    it("Should return incorrect index when index is bigger than to string length", function () {
        let expected = "Incorrect index";
        let actual = lookupChar("test", 5);

        assert.equal(actual, expected);
    });

    it("Should return the correct char at index", function () {
        let expected = "a";
        let actual = lookupChar("asd", 0);

        assert.equal(actual, expected);
    });
});