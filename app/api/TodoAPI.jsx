var $ = require("jquery")

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem("todos", JSON.stringify(todos))
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem("todos");
        var todos = [];
        try {
            todos = JSON.parse(stringTodos)
        } catch (e) {
            
        }

        return $.isArray(todos) ? todos : []
    },

    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;
        
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        
        filteredTodos = filteredTodos.filter((todo) => {
            var filterText = todo.text.toLowerCase()
            return filterText == 0 || filterText.indexOf(searchText) > -1;          
        });

        filteredTodos.sort((a,b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            }
            return 0;
        });

        return filteredTodos;

    },

};