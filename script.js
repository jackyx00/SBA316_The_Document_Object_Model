const h1 = document.createElement("h1");
const div = document.createElement("div");
const taskInput = document.createElement("input");
const addButton = document.createElement("button");
const ul = document.createElement("ul");
const li = document.createElement("li");
const template = document.createElement("template");
const span = document.createElement("span");
const delButton = document.createElement("button");

// title
h1.textContent = "To-Do List";
document.body.appendChild(h1);

// div for taskInput
taskInput.id = "taskInput";
taskInput.type = "text";
taskInput.placeholder = "New task";

addButton.id = "addTaskButton";
addButton.textContent = "Add";
div.append(taskInput, addButton);
document.body.appendChild(div);

ul.id = "taskList";
document.body.appendChild(ul);

// template
template.id = "SingleTaskTemplate";
span.className = "task";
delButton.className = "delete-btn";
delButton.textContent = "X";
li.append(span, delButton);
template.content.appendChild(li);

function handleDelClick() {
    
}

function handleAddClick() {
    if (taskInput.value === "") return;
    const newTask = template.content.cloneNode(true);
    newTask.querySelector(".task").textContent = taskInput.value;
    newTask.querySelector(".delete-btn").addEventListener('click', handleDelClick);
    ul.appendChild(newTask);
}

addButton.addEventListener('click', handleAddClick);
