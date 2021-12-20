import './style.css';
import { render, tasksContainer, focus } from './process.js';
import {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
  deleteItem,
  editItem,
} from './add&remove.js';
import { checkCompleted, check } from './interactive.js';
import removeAllCheckedRender from './deleteAll.js';
import { tasks } from './storage.js';

newTaskForm.addEventListener('submit', addTask);

tasksContainer.addEventListener('change', (e) => {
  checkCompleted(e);
  check();
});

tasksContainer.addEventListener('click', focus);

editItem();

clearCompletedTasksButton.addEventListener('click', removeAllCheckedRender);

window.addEventListener('DOMContentLoaded', () => {
  render(tasks);
  deleteItem();
  editItem();
});