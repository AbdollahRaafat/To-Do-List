import { save } from './storage.js';
import { render } from './process.js';

const removeAllCheckedRender = () => {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter((task) => !task.complete);
  save(tasks);
  render(tasks);
  document.location.reload();
};

export { removeAllCheckedRender as default };
