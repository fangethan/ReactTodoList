var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var SearchTodo = require("SearchTodo");

var TodoApp = React.createClass({
    getInitialState: function () {
      return {
          showCompleted: false,
          searchText: "",
          todos: [
              {
                  id: 1,
                  text: "Walk the dog"
              },
              {
                id: 2,
                text: "Clean the yard"
              },
              {
                id: 3,
                text: "Leave mail on porch"
              },
              {
                id: 4,
                text: "Play video games"
              },
          ]
      }  
    },

    handleAddTodoItem: function (text) {
      alert("new todo: " + text)
    },

    handleSearchTodo: function (showCompleted, searchText) {
      this.setState({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase(),
      });
      console.log(showCompleted + " " + searchText)
    },

    render: function () {
        var {todos} = this.state;

        return(
            <div>
                <SearchTodo onSearch={this.handleSearchTodo} />
                <TodoList todos={todos} />
                <AddTodo onAddNewItem={this.handleAddTodoItem} />
            </div>
        )
    }
});

module.exports = TodoApp;