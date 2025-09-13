// src/renderModal.js
import { Todo } from "./todo.js";
import { saveProjects } from "./storage.js";
import { renderTodosList, getActiveProject } from "./user-interface.js";
import { projects } from "./project.js";

export function renderTodoModal(currentProject, todo = null, index = null) {
  let modal = document.getElementById("todo-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "todo-modal";
    modal.className = "modal";
    document.body.appendChild(modal);
  }

  // ✅ Project dropdown
  const projectOptions = projects
    .map(
      (p) => `
        <option value="${p.name}" ${currentProject && currentProject.name === p.name ? "selected" : ""}>
          ${p.name}
        </option>`
    )
    .join("");

  modal.innerHTML = `
    <div class="modal-content">
      <h3>${todo ? "Edit Todo" : "New Todo"}</h3>
      <form id="todo-form">
        <label>Project:
          <select id="todo-project">${projectOptions}</select>
        </label>
        <label>Title:
          <input type="text" id="todo-title" value="${todo ? todo.title : ""}" required>
        </label>
        <label>Description:
          <textarea id="todo-desc">${todo ? todo.description : ""}</textarea>
        </label>
        <label>Due Date:
          <input type="date" id="todo-date" value="${todo ? todo.dueDate : ""}">
        </label>
        <label>Time:
          <input type="time" id="todo-time" value="${todo ? todo.time || "" : ""}">
        </label>
        <label>Priority:
          <select id="todo-priority">
            <option value="Low" ${todo?.priority === "Low" ? "selected" : ""}>Low</option>
            <option value="Medium" ${todo?.priority === "Medium" ? "selected" : ""}>Medium</option>
            <option value="High" ${todo?.priority === "High" ? "selected" : ""}>High</option>
          </select>
        </label>
        <label>Notes:
          <textarea id="todo-notes">${todo ? todo.notes : ""}</textarea>
        </label>
        <label>Checklist (comma-separated):
          <input type="text" id="todo-checklist" value="${todo ? todo.checklist.map(item => item.task).join(", ") : ""}">
        </label>
        <button type="submit">Save</button>
        <button type="button" id="cancel-btn">Cancel</button>
      </form>
    </div>
  `;

  modal.style.display = "block";

  document.getElementById("cancel-btn").addEventListener("click", () => {
    modal.style.display = "none";
  });

  document.getElementById("todo-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const checklistInput = document.getElementById("todo-checklist").value;
    const checklistArray = checklistInput
      .split(",")
      .map((task) => task.trim())
      .filter((task) => task.length > 0)
      .map((task) => ({ task, done: false }));

    const newTodo = new Todo(
      document.getElementById("todo-title").value,
      document.getElementById("todo-desc").value,
      document.getElementById("todo-date").value,
      document.getElementById("todo-time").value,
      document.getElementById("todo-priority").value,
      document.getElementById("todo-notes").value,
      checklistArray
    );

    // ✅ Use selected project from dropdown
    const selectedProjectName = document.getElementById("todo-project").value;
let targetProject = projects.find((p) => p.name === selectedProjectName);

// ✅ fallback to activeProject if not found
if (!targetProject) {
  targetProject = getActiveProject();
}

if (!targetProject) {
  alert("No project available! Please create a project first.");
  modal.style.display = "none";
  return;
}

if (todo && index !== null) {
  targetProject.todos[index] = newTodo;
} else {
  targetProject.addTodo(newTodo);
}

saveProjects();
modal.style.display = "none";
renderTodosList(targetProject);

  });
}
