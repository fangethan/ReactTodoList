var React = require("react");

var SearchTodo = React.createClass({

    render: function () {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="addTodoItem" placeholder="Search a todo item" />
                    <input type="checkbox" ref="completeTodos" /> Show completed todos
                </form>    
            </div>
        )
    }
});

module.exports = SearchTodo;