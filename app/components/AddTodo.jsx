var React = require("react");

var AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var newItem = this.refs.addTodoItem.value;

        if(newItem.trim().length > 0){
            this.refs.addTodoItem.value = '';
            this.props.onAddNewItem(newItem)
        } else {
            alert("Invalid text provided")
        }
    },

    render: function () {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="addTodoItem" placeholder="Enter a todo item" />
                    <button className="button expanded">Add Todo Item</button>
                </form>    
            </div>
        )
    }
});

module.exports = AddTodo;