// src/project.js
import { Todo } from "./todo.js";

export class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

export let projects = [];

// ✅ Load from localStorage and revive class instances
if (localStorage.getItem("projects")) {
  try {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    projects = savedProjects.map((p) => {
      const project = new Project(p.name);
      // revive todos as Todo instances
      project.todos = p.todos.map(
        (todo) =>
          new Todo(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.time,
            todo.priority,
            todo.notes,
            todo.checklist || []
          )
      );
      return project;
    });
  } catch (err) {
    console.error("Error loading projects from localStorage:", err);
    projects = []; // fallback to empty array if parse fails
  }
}
