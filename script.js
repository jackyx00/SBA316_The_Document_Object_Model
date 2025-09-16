const h1 = document.createElement("h1");
const div = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");

// title
h1.textContent = "To-Do List";
document.body.appendChild(h1);

// div for taskInput
input.id = "taskInput";
input.type = "text";
input.placeholder = "New task";

button.id = "addTaskButton";
button.textContent = "Add";
div.append(input, button);
document.body.appendChild(div);
