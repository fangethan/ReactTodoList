var React = require("react");
var uuid = require("node-uuid")

var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var SearchTodo = require("SearchTodo");
var TodoAPI = require("TodoAPI")

var TodoApp = React.createClass({
    getInitialState: function () {
      return {
          showCompleted: false,
          searchText: "",
          todos: TodoAPI.getTodos(),
      }  
    },

    componentDidUpdate: function () {
      TodoAPI.setTodos(this.state.todos)
    },

    handleAddTodoItem: function (text) {
      this.setState({
        todos: [
          ...this.state.todos, 
          {
            id: uuid(),
            text: text,
            completed: false,
          },
        ]
      })
    },

    handleSearchTodo: function (showCompleted, searchText) {
      this.setState({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase(),
      });
      console.log(showCompleted + " " + searchText)
    },

    handleToggle: function (id) {
      var updatedTodos = this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      this.setState({todos: updatedTodos})
    },

    render: function () {
        var {todos} = this.state;

        return(
            <div>
                <SearchTodo onSearch={this.handleSearchTodo} />
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddNewItem={this.handleAddTodoItem} />
            </div>
        )
    }
});

module.exports = TodoApp;