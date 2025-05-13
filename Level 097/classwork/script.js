document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
  
    const form = document.getElementById("taskForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();
      if (taskText === "") return;
  
      const taskList = document.getElementById("taskList");
      const li = createTaskElement(taskText);
      taskList.appendChild(li);
  
      saveTask(taskText);
      input.value = "";
    });
  });
  
  function createTaskElement(text) {
    const li = document.createElement("li");
    li.textContent = text;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      li.remove();
      deleteTask(text);
    });
  
    li.appendChild(deleteBtn);
    return li;
  }
  
  function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function deleteTask(taskToDelete) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskToDelete);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
      const li = createTaskElement(task);
      document.getElementById("taskList").appendChild(li);
    });
  }