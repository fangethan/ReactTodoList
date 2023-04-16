var React = require("react");

var SearchTodo = React.createClass({

    handleSearch: function () {
        
    },

    render: function () {
        return(
            <div>
                <div>
                    <input type="text" ref="addTodoItem" placeholder="Search a todo item" onChange={this.handleSearch} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="completeTodos" onChange={this.handleSearch} /> Show completed todos
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = SearchTodo;