let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");
const progressDisplay = document.getElementById("progress");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateProgress() {
  const completed = tasks.filter((task) => task.done).length;
  progressDisplay.textContent = `${completed}/${tasks.length} tasks completed`;
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add(`priority-${task.priority}`);
    li.innerHTML = `
      <span class="${task.done ? "completed" : ""}">${task.text}</span>
      <input type="checkbox" class="stick-checkbox" ${
        task.done ? "checked" : ""
      } onclick="toggleTask(${index})" />
    `;
    taskList.appendChild(li);
  });
  updateProgress();
  saveTasks();
}

function addTask() {
  const input = document.getElementById("taskInput");
  const priority = document.getElementById("prioritySelect").value;
  const text = input.value.trim();

  if (text !== "") {
    tasks.push({ text, priority, done: false });
    input.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].done = true;
  setTimeout(() => {
    tasks.splice(index, 1); // remove completed task
    renderTasks();
  }, 300); // wait a bit for UX effect
}

renderTasks();
