var React = require("react");
var uuid = require("node-uuid")
var moment = require("moment");

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
            createdAt: moment().unix(),
            completedAt: undefined,
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
          todo.completedAt = todo.completed ? moment().unix() : undefined;
        }
        return todo;
      });
      this.setState({todos: updatedTodos})
    },

    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filterTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);

        return(
            <div>
                <h1 className="page-title">Todo App</h1>

                <div className="row">
                  <div className="column small-centered small-11 medium-6 large-5">
                    <div className="container">
                      <SearchTodo onSearch={this.handleSearchTodo} />
                      <TodoList todos={filterTodos} onToggle={this.handleToggle} />
                      <AddTodo onAddNewItem={this.handleAddTodoItem} />
                    </div>
                  </div>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;