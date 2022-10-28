// Hiển thị danh sách công việc và số lượng các công việc cần hoàn thành
// Thêm mới 1 công việc cần làm thông qua nhập vào form
// Đánh dấu một công việc là hoàn thành
// Xóa 1 công việc
// Xóa tất cả công việc
// Lọc theo trạng thái
const container = document.querySelector(".todo-list");
const todoList = document.querySelector(".todos");
const pending = document.querySelector(".pending-value");
const createForm = document.forms.create;
const filterForm = document.forms.filter;
const btnClear = document.querySelector(".btn-clear");

function createId() {
    let id = Math.floor(Math.random() * 10000);
    return id;
}

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function deleteTodo(id, el) {
    if (confirm("Xóa todo?")) {
        const index = todos.findIndex(function (todo) {
            return todo.id === id;
        });

        todos.splice(index, 1);
        el.remove();
        updateSummary();
        save();
    }
}

function createTodoItem(todo) {
    const div = document.createElement("div");
    div.className = todo.status ? "todo-item completed" : "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.status;

    const title = document.createElement("span");
    title.className = "todo-title";
    title.innerText = todo.title;

    const button = document.createElement("button");
    button.innerText = "Xóa";
    button.onclick = function () {
        deleteTodo(todo.id, div);
    };

    div.append(checkbox, title, button);

    return div;
}

function renderTodoList() {
    todos.forEach(function (todo) {
        const item = createTodoItem(todo);
        todoList.prepend(item);
    });
}

function updateSummary() {
    if (todos.length > 0) {
        container.classList.remove("is-empty");
        pending.innerText = todos.length;
    } else {
        container.classList.add("is-empty");
    }
}

function handleCreateFormSubmit(e) {
    e.preventDefault();

    const title = e.target.elements.title;

    if (title.value.trim().length > 0) {
        const newItem = {
            id: createId(),
            title: title.value.trim(),
            status: false,
        };

        todos.push(newItem);
        const item = createTodoItem(newItem);
        todoList.prepend(item);
        title.value = "";
        updateSummary();
        save();
    }
}

function clear() {
    if (confirm("Xóa tất cả todo??")) {
        todos.length = 0;

        todoList.innerHTML = "";
        updateSummary();
        save();
    }
}

function handleFilterChange(e) {
    const option = filterForm.elements.filter.value;
    const items = todoList.children;

    switch (option) {
        case "active":
            for (let item of items) {
                if (item.classList.contains("completed")) {
                    item.classList.add("hide");
                } else {
                    item.classList.remove("hide");
                }
            }
            break;

        case "completed":
            for (let item of items) {
                if (item.classList.contains("completed")) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }
            }
            break;

        default:
            for (let item of items) {
                item.classList.remove("hide");
            }
    }
}

function save() {
    const str = JSON.stringify(todos);

    localStorage.setItem("todos", str);
}

window.onload = function () {
    renderTodoList();
    updateSummary();

    createForm.onsubmit = handleCreateFormSubmit;
    filterForm.onchange = handleFilterChange;
    btnClear.onclick = clear;
};
