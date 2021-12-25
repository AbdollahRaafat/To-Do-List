import { editTask, clearChecked, status } from '../src/util.js';

describe('editing a task', () => {
  const myTasks = [
    {
      description: 'Walk The Dog',

      completed: false,

      index: 1,

    },

    {

      description: 'Do Laundry',

      completed: false,

      index: 2,

    },

  ];
  document.body.innerHTML = '<p class="description" id="para"></p>';
  const para = document.getElementById('para');

  test('if task description changes after edit', () => {
    para.innerHTML = 'Hello';

    editTask(para, myTasks[0], myTasks);

    expect(myTasks[0].description).not.toMatch('Walk The Dog');
  });

  test('if task description changes after edit', () => {
    para.innerHTML = 'Hello';

    editTask(para, myTasks[0], myTasks);

    expect(myTasks[0].description).toMatch('Hello');
  });
});

describe('updating the completed status of a task', () => {
  document.body.innerHTML = '<input type="checkbox" id="checkbox">';

  const checkbox = document.getElementById('checkbox');

  const myTasks = [

    {

      description: 'Walk The Dog',

      completed: false,

      index: 1,

    },

    {

      description: 'Do Laundry',

      completed: false,

      index: 2,

    },

  ];

  test('Update completed status to true', () => {
    checkbox.checked = true;

    status(checkbox, myTasks[1]);

    expect(myTasks[1].completed).toBeTruthy();
  });

  test('Change completed status to false', () => {
    checkbox.checked = false;

    status(checkbox, myTasks[1]);

    expect(myTasks[1].completed).toBeFalsy();
  });
});

describe('clear completed tasks', () => {
  let myTasks = [

    {

      description: 'Walk The Dog',

      completed: true,

      index: 1,

    },

    {

      description: 'Do Laundry',

      completed: false,

      index: 2,

    },

    {

      description: 'Run Away',

      completed: true,

      index: 3,

    },

  ];

  myTasks = myTasks.filter((task) => !task.completed);

  test('Check array length after clearing completed tasks', () => {
    clearChecked(myTasks);

    expect(myTasks).toHaveLength(1);
  });

  test('Update index after clearing completed tasks', () => {
    clearChecked(myTasks);

    expect(myTasks[0].index).toBe(1);
  });
});