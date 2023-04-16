var React = require("react")
var ReactDOM = require("react-dom")
var expect = require("expect")
var $ = require("jQuery")
var TestUtils = require("react-addons-test-utils")


var SearchTodo = require("SearchTodo");

describe("SearchTodo", () => {
    it("SearchTodo should exist", () => {
        expect(SearchTodo).toExist();
    });

});
