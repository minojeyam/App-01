function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = taskInput.value;
  taskText.className = "task-text";

  taskText.addEventListener("click", () => {
    taskText.classList.toggle("completed");
  });

  const stickCheckbox = document.createElement("input");
  stickCheckbox.type = "checkbox";
  stickCheckbox.className = "stick-checkbox";

  stickCheckbox.addEventListener("change", function () {
    if (this.checked) {
      li.remove();
    }
  });

  li.appendChild(taskText);
  li.appendChild(stickCheckbox);
  taskList.appendChild(li);
  taskInput.value = "";
}
