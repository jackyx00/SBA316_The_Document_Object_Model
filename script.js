const div = document.createElement("div");
const ul = document.createElement("ul");
const li = document.createElement("li");
const template = document.createElement("template");
const span = document.createElement("span");
const delButton = document.createElement("button");

const taskInput = document.getElementById("userTaskInput");
const addButton = document.getElementById("addTaskButton");

// div for user input and add task button
div.append(taskInput, addButton);
document.body.appendChild(div);

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
}

function handleAddClick() {
    if (taskInput.value === "") {
        window.alert("Task is empty!");
        return;
    }
    const newTask = template.content.cloneNode(true);
    newTask.querySelector("li").classList.add("taskItem");
    newTask.querySelector(".task").textContent = taskInput.value;
    newTask.querySelector(".delete-btn").addEventListener('click', handleDelClick);
    ul.appendChild(newTask);
    ul.style.border = "2px solid black";  
    ul.style.padding = "10px";
    taskInput.value = "";
}

addButton.addEventListener('click', handleAddClick);
