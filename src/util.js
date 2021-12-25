function status(checkbox, tasklist) {
  if (checkbox.checked) {
    tasklist.completed = true;
  } else {
    tasklist.completed = false;
  }
}

function editTask(text, task, taskArray) {
  task.description = text.innerHTML;
  text.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      task.description = text.innerHTML;
      localStorage.setItem('tasks', JSON.stringify(taskArray));
      text.parentElement.classList.remove('inputEdit');
      text.setAttribute('contenteditable', 'false');
    }
  });
}

function clearChecked(taskArray) {
  taskArray = taskArray.filter((task) => !task.completed);
  taskArray.forEach((task) => {
    task.index = taskArray.indexOf(task) + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

export {
  editTask, clearChecked, status,
};