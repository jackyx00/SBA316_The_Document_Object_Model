const form = document.createElement("form");
const ul = document.createElement("ul");
const li = document.createElement("li");
const template = document.createElement("template");
const span = document.createElement("span");
const delButton = document.createElement("button");

const taskInput = document.getElementById("userTaskInput");
const addButton = document.getElementById("addTaskButton");

// form for user input and add task button
form.id = "addTaskForm";
const taskForm = form;
form.append(taskInput, addButton);
taskInput.setAttribute("minlength", "3");
taskInput.setAttribute("maxlength", "50");
addButton.type = "submit";
document.body.appendChild(form);

ul.id = "taskList";
ul.style.listStyleType = "none";
document.body.appendChild(ul);

// template
template.id = "SingleTaskTemplate";
span.className = "task";
delButton.className = "delete-btn";
delButton.textContent = "X";
li.append(span, delButton);
template.content.appendChild(li);

function handleDelClick(event) {
  if (window.confirm("Are you sure you want to delete this task?")) {
    event.target.parentNode.remove();
    if (ul.children.length === 0) {
      ul.style.border = "none";
    }
  }
  taskInput.focus();
}

function handleAddClick(event) {
    event.preventDefault();
    if (taskInput.value === "") {
        window.alert("Input is empty!");
        taskInput.focus();
        return;
    }
    const newTask = template.content.cloneNode(true);
    newTask.querySelector("li").classList.add("taskItem");
    newTask.querySelector(".task").textContent = taskInput.value;
    newTask.querySelector(".delete-btn").addEventListener("click", handleDelClick);
    ul.appendChild(newTask);
    ul.style.border = "2px solid black";  
    ul.style.padding = "10px";
    taskInput.value = "";
    taskInput.focus();
}

taskForm.addEventListener("submit", handleAddClick);

taskInput.focus();
