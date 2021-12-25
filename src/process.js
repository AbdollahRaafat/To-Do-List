function status(checkbox, tasklist) {
  if (checkbox.checked) {
    tasklist.completed = true;
  } else {
    tasklist.completed = false;
  }
}

export default status;