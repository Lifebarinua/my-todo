// src/storage.js
import { projects } from "./project.js";

export function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}
