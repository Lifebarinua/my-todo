// src/todo.js
export class Todo {
  constructor(title, description, dueDate, time, priority, notes, checklist = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.time = time;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist; // [{task, done}]
  }
}
