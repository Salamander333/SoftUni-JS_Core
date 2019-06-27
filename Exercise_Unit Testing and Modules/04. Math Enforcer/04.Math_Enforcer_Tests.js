const mathEnforcer = require("./04.Math_Enforcer");

const assert = require("chai").assert;

describe("mathEnforcer", function () {
    describe("addFive", function () {
        it("Should return undefined when we input NaN", function () {
            assert.isUndefined(mathEnforcer.addFive("a"));
            assert.isUndefined(mathEnforcer.addFive(true));
            assert.isUndefined(mathEnforcer.addFive([]));
        });

        it("Should add 5 to positive number", function (){
            let expect = 10;
            let actual = mathEnforcer.addFive(5);

            assert.equal(actual, expect);
        })

        it("Should add 5 to negative number", function (){
            let expect = 0;
            let actual = mathEnforcer.addFive(-5);

            assert.equal(actual, expect);
        })

        it("Should add 5 to floating number", function (){
            let expect = 5.5;
            let actual = mathEnforcer.addFive(0.5);

            assert.equal(actual, expect);
        })
    });

    describe("subtractTen", function () {
        it("Should return undefined when we input NaN", function () {
            assert.isUndefined(mathEnforcer.subtractTen("a"));
            assert.isUndefined(mathEnforcer.subtractTen(true));
            assert.isUndefined(mathEnforcer.subtractTen([]));
        });

        it("Should subtract 10 from positive number", function (){
            let expect = 10;
            let actual = mathEnforcer.subtractTen(20);

            assert.equal(actual, expect);
        });

        it("Should subtract 10 from negative number", function (){
            let expect = -20;
            let actual = mathEnforcer.subtractTen(-10);

            assert.equal(actual, expect);
        });

        it("Should subtract 10 from floating number", function (){
            let expect = 10.5;
            let actual = mathEnforcer.subtractTen(20.5);

            assert.equal(actual, expect);
        });
    });

    describe("sum", function () {
        it("Should return undefined when we input NaN", function () {
            assert.isUndefined(mathEnforcer.sum("a", 1));
            assert.isUndefined(mathEnforcer.sum(1, true));
            assert.isUndefined(mathEnforcer.sum([], 2));
            assert.isUndefined(mathEnforcer.sum(2, {}));
        });

        it("Should sum positive numbers", function () {
            let expect = 10;
            let actual = mathEnforcer.sum(5, 5);

            assert.equal(actual, expect);
        });

        it("Should sum negative numbers", function () {
            let expect = -10;
            let actual = mathEnforcer.sum(-5, -5);

            assert.equal(actual, expect);
        });

        it("Should sum floating numbers", function () {
            let expect = 5;
            let actual = mathEnforcer.sum(2.5, 2.5);

            assert.equal(actual, expect);
        });
    });
});