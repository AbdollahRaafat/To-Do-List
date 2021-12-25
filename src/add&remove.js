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

function deleteTask(taskArray, i) {
  taskArray.splice(i, 1);
  taskArray.forEach((task) => {
    task.index = taskArray.indexOf(task) + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function clearChecked(taskArray) {
  taskArray = taskArray.filter((task) => !task.completed);
  taskArray.forEach((task) => {
    task.index = taskArray.indexOf(task) + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(taskArray));
}

export {
  addTask, editTask, deleteTask, clearChecked,
};
