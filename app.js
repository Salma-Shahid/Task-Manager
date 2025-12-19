document.addEventListener("DOMContentLoaded", () => {
  let taskTitle = document.getElementById("taskTitle");
  let taskDesc = document.getElementById("taskDesc");
  let addTaskBtn = document.getElementById("addTaskBtn");
  let taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
    let title = taskTitle.value;
    let description = taskDesc.value;
    if (title === "" || description === "") {
      alert("Please enter both task title and description");
      return;
    }

    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    taskItem.innerHTML = `
        <div class="task-content">
        <h3 class="task-title">${title}</h3>
        <p class="task-description">${description}</p>
        </div>
        <div>
          <button class="complete-btn" id="complete">✔️</button>
          <button class="delete-btn"  id="delete"  >❌</button>
       </div>
        `;
    taskList.appendChild(taskItem);
    taskTitle.value = "";
    taskDesc.value = "";

    let completeBtn = taskItem.querySelector(".complete-btn");
    let deleteBtn = taskItem.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
      taskItem.remove();
    });

    completeBtn.addEventListener("click", () => {
      taskItem.querySelector(".task-content").classList.toggle("completed");
    });
  });
});
