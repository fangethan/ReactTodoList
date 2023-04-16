var React = require("react")
var ReactDOM = require("react-dom")
var expect = require("expect")
var $ = require("jQuery")
var TestUtils = require("react-addons-test-utils")


var AddTodo = require("AddTodo");

describe("AddTodo", () => {
    it("AddTodo should exist", () => {
        expect(AddTodo).toExist();
    });

    it("should call onAddNewItem when data is valid", () => {
        var spy = expect.createSpy();

        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddNewItem={spy} />)
        var $el = $(ReactDOM.findDOMNode(addTodo))
        addTodo.refs.addTodoItem.value = "Check mail"

        TestUtils.Simulate.submit($el.find("form")[0])

        expect(spy).toHaveBeenCalled("Check mail")
    });

    it("should not call onAddNewItem when data is just whitespaces", () => {
        var spy = expect.createSpy();

        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddNewItem={spy} />)
        var $el = $(ReactDOM.findDOMNode(addTodo))
        addTodo.refs.addTodoItem.value = "Check mail"

        TestUtils.Simulate.submit($el.find("form")[0])

        expect(spy).toHaveBeenCalled("  ")
    });

    it("should not call onAddNewItem when data is an empty string", () => {
        var spy = expect.createSpy();

        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddNewItem={spy} />)
        var $el = $(ReactDOM.findDOMNode(addTodo))
        addTodo.refs.addTodoItem.value = "Check mail"

        TestUtils.Simulate.submit($el.find("form")[0])

        expect(spy).toHaveBeenCalled("")
    });

});
