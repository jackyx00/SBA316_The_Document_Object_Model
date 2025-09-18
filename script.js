// create elements
const form = document.createElement("form");
const ul = document.createElement("ul");
const li = document.createElement("li");
const template = document.createElement("template");
const span = document.createElement("span");
const delButton = document.createElement("button");

const taskInput = document.getElementById("userTaskInput");
const addButton = document.getElementById("addTaskButton");

// form for user input field and add task button
form.id = "addTaskForm";
const taskForm = form;
form.append(taskInput, addButton);
taskInput.setAttribute("minlength", "3");
taskInput.setAttribute("maxlength", "50");
addButton.type = "submit";
document.body.appendChild(form);

// ul container for all li(task) elements
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

// handle event on button click to delete task
function handleDelClick(event) {
  event.preventDefault();
  if (window.confirm("Are you sure you want to delete this task?")) {
    event.target.parentNode.remove();
    if (ul.children.length === 0) {
      ul.style.border = "none";
    }
  }
  taskInput.focus();
}

// handle event on form submit to add task
function handleAddClick(event) {
  event.preventDefault();
  // condition check for empty input
  if (taskInput.value === "") {
    window.alert("Input is empty!");
    taskInput.focus();
    return;
  }

  // find duplicate tasks by loop through li elements
  const tasks = document.querySelectorAll(".taskItem .task");
  let duplicateFound = false;
  tasks.forEach((task) => {
    if (task.textContent.toLowerCase() === taskInput.value.toLowerCase()) {
      task.parentElement.remove();
      duplicateFound = true;
    }
  });
  if (duplicateFound) {
    window.alert("Duplicate task found, please input another task!");
  }

  // reuse template for each new task enter by user
  const newTask = template.content.cloneNode(true);
  newTask.querySelector("li").classList.add("taskItem");
  newTask.querySelector(".task").textContent = taskInput.value;
  // add event listener for delete task
  newTask
    .querySelector(".delete-btn")
    .addEventListener("click", handleDelClick);
  ul.appendChild(newTask);
  ul.style.border = "2px solid black";
  ul.style.padding = "10px";
  taskInput.value = "";
  taskInput.focus();
}
// add event listener for add task
taskForm.addEventListener("submit", handleAddClick);

taskInput.focus();

// alert pop-up for page refresh
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
});