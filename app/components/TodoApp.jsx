var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var SearchTodo = require("SearchTodo");
var uuid = require("node-uuid")

var TodoApp = React.createClass({
    getInitialState: function () {
      return {
          showCompleted: false,
          searchText: "",
          todos: [
              {
                  id: uuid(),
                  text: "Walk the dog"
              },
              {
                id: uuid(),
                text: "Clean the yard"
              },
              {
                id: uuid(),
                text: "Leave mail on porch"
              },
              {
                id: uuid(),
                text: "Play video games"
              },
          ]
      }  
    },

    handleAddTodoItem: function (text) {
      this.setState({
        todos: [
          ...this.state.todos, 
          {
            id: uuid(),
            text: text,
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