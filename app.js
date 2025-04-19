// Define a type for Todo
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Initial State
var todos = [];
// DOM elements
var form = document.getElementById("todo-form");
var input = document.getElementById("todo-input");
var list = document.getElementById("todo-list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTodo = {
        id: Date.now(),
        text: input.value.trim(),
        completed: false,
    };
    if (newTodo.text !== "") {
        todos.push(newTodo);
        input.value = "";
        renderTodos();
    }
});
// Toggle and delete function
function toggleTodo(id) {
    todos = todos.map(function (todo) {
        return todo.id === id ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
    });
    renderTodos();
}
function deleteTodo(id) {
    todos = todos.filter(function (todo) { return todo.id !== id; });
    renderTodos();
}
// Render the todos
function renderTodos() {
    list.innerHTML = "";
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = todo.text;
        if (todo.completed)
            span.classList.add("completed");
        span.onclick = function () { return toggleTodo(todo.id); };
        var delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = function () { return deleteTodo(todo.id); };
        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}
