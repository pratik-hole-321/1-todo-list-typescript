"use strict";
// Define a type for Todo
// Initial State
let todos = [];
// DOM elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
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
    todos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    renderTodos();
}
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
}
// Render the todos
function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = todo.text;
        if (todo.completed)
            span.classList.add("completed");
        span.onclick = () => toggleTodo(todo.id);
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteTodo(todo.id);
        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}
