/* eslint-disable no-loop-func */
import './style.css';
import status from './process.js';
import {
  addTask, editTask, deleteTask, clearChecked,
} from './add&remove.js';

const mainList = document.getElementById('main-list');
const clearAll = document.getElementById('clear');

let myTasks = [];

// Save to local storage
function saveToStorage(taskArray) {
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

// Display Tasks
function displayTasks() {
  mainList.innerHTML = '';
  myTasks.forEach((myTask) => {
    const content = `<div class="list-input"><input type="checkbox"> <p class="description">${myTask.description}</p></div><span><i class="far fa-trash-alt"></i></span>`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `${content}`;
    listItem.className = 'list-item';
    mainList.appendChild(listItem);

    const listInput = listItem.firstChild;
    const checkbox = listInput.firstChild;
    const para = listInput.lastChild;
    const trashIcon = listInput.nextSibling.firstChild;

    // Update checkbox status
    checkbox.checked = myTask.completed;
    checkbox.addEventListener('change', () => {
      status(checkbox, myTask);
      saveToStorage(myTasks);
    });

    // Edit task
    para.addEventListener('dblclick', () => {
      para.setAttribute('contenteditable', 'true');
      para.parentElement.classList.add('inputEdit');
      editTask(para, myTask, myTasks);
    });

    trashIcon.addEventListener('click', () => {
      deleteTask(myTasks, myTask);
      displayTasks();
      window.location.reload();
    });
  });
}

clearAll.addEventListener('click', () => {
  clearChecked(myTasks);
  window.location.reload();
});

// Add new task with enter icon
const enterBtn = document.getElementById('enter');
enterBtn.onclick = () => {
  addTask(myTasks);
  displayTasks();
};

// Add new task with enter keypress
const inputList = document.getElementById('inputList');
inputList.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask(myTasks);
    displayTasks();
  }
});

// Get from local storage
function getFromStorage() {
  const local = JSON.parse(localStorage.getItem('tasks'));
  if (local) {
    myTasks = local;
  }
  if (myTasks.length === 0) {
    mainList.innerHTML = '<li class="list-item"><div class="list-input"><p>To-Do List is empty.</p></div></li>';
  } else {
    displayTasks();
  }
}

window.onload = getFromStorage();