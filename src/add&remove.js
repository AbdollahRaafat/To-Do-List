import { render } from './process.js';
import { save, tasks } from './storage.js';

const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const clearCompletedTasksButton = document.querySelector('[data-delete-completed-tasks]');

function addTask(taskArray) {
  const inputList = document.getElementById('inputList');
  const task = {
    description: inputList.value,
    completed: false,
    index: taskArray.length + 1,
  };
  taskArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(taskArray));
  inputList.value = '';
}

function deleteItem(taskArray, i) {
  taskArray.splice(i, 1);
  taskArray.forEach((task) => {
    task.index = taskArray.indexOf(task) + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function editItem() {
  const itemValue = document.querySelectorAll('textarea');
  itemValue.forEach((item, index) => {
    item.addEventListener('keyup', () => {
      tasks[index].description = item.value;
      save(tasks);
    });
  });
}

export {
  newTaskForm,
  addTask,
  clearCompletedTasksButton,
  deleteItem,
  editItem,
};