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

        // expect createdAt to be a number
        expect(typeof todoApp.state.todos[0].createdAt).toBe("number")
    });
    
    it("should toggle completed value when handleToggle is called", () => {
        var todoData = {
            id: 11,
            text: "Walk the dog",
            completed: false,
            createdAt: 0,
            completedAt: undefined,
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]})
        
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true)
        expect(todoApp.state.todos[0].completedAt).toBeA("number")
    });
    
    it("should toggle todo from completed to incompleted", () => {
        var todoData = {
            id: 11,
            text: "Walk the dog",
            completed: true,
            createdAt: 0,
            completedAt: 123,
        }
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]})
        
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false)
        expect(todoApp.state.todos[0].completedAt).toNotExist()
    });
});
