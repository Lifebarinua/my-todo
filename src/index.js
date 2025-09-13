// src/index.js
import { renderHeader, renderSidebar, renderProjectList, renderTodosList, getActiveProject } from "./user-interface.js";
import { projects } from "./project.js";
import "./styles.css";

// Initialize UI
renderHeader();
renderSidebar();

// ✅ if projects exist, show first one
if (projects.length > 0) {
  renderProjectList();
  renderTodosList(getActiveProject());
}
