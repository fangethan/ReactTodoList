var React = require("React");

var Todo = React.createClass({

    render: function () {
        var {text} = this.props;

        return(
            <div>
                {text}
            </div>
        )
    }
});

module.exports = Todo;