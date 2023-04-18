var React = require("react")
var ReactDOM = require("react-dom")
var expect = require("expect")
var $ = require("jQuery")
var TestUtils = require("react-addons-test-utils")


var TodoApp = require("TodoApp");

describe("TodoApp", () => {
    it("TodoApp should exist", () => {
        expect(TodoApp).toExist();
    });

    it("should add todo to the todos state on handleAddTodoItem", () => {
        var todoText = "Check email";
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />)
        
        todoApp.setState({todos: []});
        todoApp.handleAddTodoItem(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText)
    });
    

});
