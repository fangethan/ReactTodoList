var expect = require("expect")

var TodoAPI = require("TodoAPI");

describe("TodoAPI", () => {
    beforeEach(() => {
        localStorage.removeItem("todos")
    });

    it("TodoAPI should exist", () => {
        expect(TodoAPI).toExist();
    });

    describe("setTodos", () => {
        it("should set valid todo array", () => {
            var todos = [{
                id: 1,
                text: "test all files",
                completed: false,
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem("todos"));
            expect(actualTodos).toEqual(todos);
        });
        
        it("should not set invalid todo array", () => {
            var badTodos = {"a": "b"};
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem("todos")).toBe(null);
        });
    });

    describe("getTodos", () => {
        it("should get [] when there is bad localstorage data", () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it("should return todos if valid array is in local storage", () => {
            var todos = [{
                id: 1,
                text: "test all files",
                completed: false,
            }];
            localStorage.setItem("todos", JSON.stringify(todos))
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });

    });
});
