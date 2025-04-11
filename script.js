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

  const stickLabel = document.createElement("label");
  stickLabel.style.fontSize = "12px";
  stickLabel.style.display = "flex";
  stickLabel.style.alignItems = "center";
  stickLabel.innerHTML = `
    <input type="checkbox" class="stick-checkbox" />
    Stick
  `;

  stickLabel.querySelector("input").addEventListener("change", function () {
    if (this.checked) {
      li.remove();
    }
  });

  li.appendChild(taskText);
  li.appendChild(stickLabel);
  taskList.appendChild(li);
  taskInput.value = "";
}
