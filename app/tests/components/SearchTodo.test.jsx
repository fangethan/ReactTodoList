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

    // it("should return true if checkbox is checked", () => {
    //     var spy = expect.createSpy();

    //     var searchTodo = TestUtils.renderIntoDocument(<SearchTodo onSearch={spy} />)
    //     var $el = $(ReactDOM.findDOMNode(searchTodo))
    //     searchTodo.refs..value = "Check mail"

    //     TestUtils.Simulate.submit($el.find("form")[0])

    //     expect(spy).toHaveBeenCalled("Check mail")
    // });

});
