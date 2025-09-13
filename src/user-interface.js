// src/user-interface.js
import { projects, Project } from "./project.js";
import { saveProjects } from "./storage.js";
import { renderTodoModal } from "./renderModal.js";

let activeProject = null;

export function renderHeader() {
  const header = document.querySelector("header");
  header.innerHTML = `
    <h1>Todo App</h1>
    <button id="add-todo-btn">+ Add New Todo</button>
  `;
  document.getElementById("add-todo-btn").addEventListener("click", () => {
    renderTodoModal(activeProject); // ✅ pass current project
  });
}

export function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = `
    <h2>Projects</h2>
    <ul id="project-list"></ul>
    <button id="add-project-btn">+ Project</button>
  `;
  renderProjectList();

  document.getElementById("add-project-btn").addEventListener("click", () => {
    const name = prompt("Enter new project name:");
    if (!name) return;

    if (!projects.some((p) => p.name === name)) {
      const newProject = new Project(name);
      projects.push(newProject);
      saveProjects();
      setActiveProject(newProject); // ✅ activate
      renderProjectList();
      renderTodosList(newProject);
    }
  });
}

export function renderProjectList() {
  const list = document.getElementById("project-list");
  list.innerHTML = "";

  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.name;

    if (activeProject && activeProject.name === project.name) {
      li.classList.add("active-project"); // ✅ highlight
    }

    li.addEventListener("click", () => {
      setActiveProject(project);
      renderProjectList();
      renderTodosList(project);
    });

    list.appendChild(li);
  });

  // ✅ default highlight first if none
  if (!activeProject && projects.length > 0) {
    setActiveProject(projects[0]);
    renderProjectList();
    renderTodosList(activeProject);
  }
}

export function renderTodosList(project) {
  const cardsContainer = document.getElementById("cards-container");
  const projectTitle = document.getElementById("project-title");

  cardsContainer.innerHTML = "";
  if (!project) {
    projectTitle.textContent = "Select a Project";
    return;
  }

  // ✅ update main header with project name
  projectTitle.textContent = project.name;

  project.todos
  .filter(todo => todo) // skip null/undefined
  .forEach((todo, index) => {
    const card = document.createElement("div");
    card.classList.add("todo-card", "tooltip-container");

    card.innerHTML = `
      <h3>${todo.title}</h3>
      <p><strong>Due:</strong> ${todo.dueDate || "No date"} ${todo.time ? "at " + todo.time : ""}</p>
      <p><strong>Priority:</strong> ${todo.priority}</p>
      <ul>
        ${todo.checklist
          .map(
            (item, i) => `
              <li>
                <input type="checkbox" ${item.done ? "checked" : ""} data-todo="${index}" data-check="${i}">
                ${item.task}
              </li>`
          )
          .join("")}
      </ul>
      <button class="edit-btn" data-edit="${index}">Edit</button>
      <button class="delete-btn" data-delete="${index}">Delete</button>
      <!-- ✅ Tooltip: ONLY description + notes -->
      <div class="tooltip">
        ${todo.description || "No description"}<br><br>${todo.notes || "No notes"}
      </div>
    `;
    cardsContainer.appendChild(card);

     // ✅ Add event listeners after adding card
    card.querySelector(".edit-btn").addEventListener("click", () => {
      renderTodoModal(project, todo, index); // open modal with current todo
    });

    card.querySelector(".delete-btn").addEventListener("click", () => {
      project.todos.splice(index, 1); // remove todo
      saveProjects();
      renderTodosList(project); // re-render list
    });


  });
}

function setActiveProject(project) {
  activeProject = project;
}

export function getActiveProject() {
  return activeProject;
}
