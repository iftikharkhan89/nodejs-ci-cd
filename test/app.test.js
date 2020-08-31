const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();


const app = require('../src/app.js');

// using Assert API
describe("App.js test using Assert API", function () {
    it("Assert: must return Hello world", function () {
        assert.equal(app.helloWorld(), "Hello World");
    })
    it("Assert: must return string", function () {
        assert.typeOf(app.helloWorld(), "string");
    })

    it("Assert: must have length 11", function () {
        assert.lengthOf(app.helloWorld(), 12);
    })
});

// using Expect API

describe("App.js test using Expect API", function () {
    it("Expected Hello World", function () {
        expect(app.helloWorld()).to.equal("Hello World");
    });
    it("Expected a string", function () {
        expect(app.helloWorld()).to.be.a("string");
    })
});

// using Should API

describe("App.js test using Should API", function () {
    it("Should return Hello World", function () {
        var result = app.helloWorld();
        result.should.equal("Hello World");
        //expect(app.helloWorld()).to.equal("Hello World");
    });
    it("Should be a string", function () {
        var result = app.helloWorld();
        result.should.be.a("string");
        //expect(app.helloWorld()).to.be.a("string");
    })
});