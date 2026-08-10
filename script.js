'use strict';

class Todo{
  constructor(title,date,description,time){
    this.title = title;
    this.date = date;
    this.description = description;
    this.time = time;
    this.completed = false;
  }
}

class TodoList{
  constructor(){
    this.todos = [];
  }
  addTodo(todo){
    this.todos.push(todo);
  }
  deleteTodo(index){
    this.todos.splice(index,1);
  }
  toggleComplete(index){
    this.todos[index].completed = !this.todos[index].completed;
  }
}

const titleInput = document.querySelector('#title');
const dateInput = document.querySelector('#date');
const descriptionInput = document.querySelector('#description');
const timeInput = document.querySelector('#time');
const buttonInput = document.querySelector('#add-activities');
const taskList = document.querySelector('#task-list');

const todoList = new TodoList();

function render(){
  taskList.innerHTML = "";

  if (todoList.todos.length === 0){
    taskList.textContent = "No tasks yet. Add your first activity!"
    return;
  }

  todoList.todos.forEach((activity,index) => {
    const cardActivity = document.createElement('div');

    cardActivity.innerHTML = `
    <h3>${activity.title}</h3>
    <p class="${activity.completed ? 'completed' : ''}">${activity.description}</p>
    <div>
      <input type="checkbox" ${activity.completed ? 'checked' : ''}>
      <button>Delete</button>
      <span>${activity.time}</span>
    </div>
    `;

    const checkbox = cardActivity.querySelector('input');
    const deleteButton = cardActivity.querySelector('button');

    deleteButton.addEventListener('click', () => {
      todoList.deleteTodo(index);
      render();
    });

    checkbox.addEventListener('click', () => {
      todoList.toggleComplete(index);
      render();
    });

    taskList.appendChild(cardActivity);
  });
}

buttonInput.addEventListener('click', () => {
  const title = titleInput.value;
  const date = dateInput.value;
  const description = descriptionInput.value;
  const time = timeInput.value;

  if (!title || !date || !description || !time){
    alert('Please fill in the fields!');
    return;
  }

  const newTodo = new Todo(title, date, description, time);

  todoList.addTodo(newTodo);

  render();

  titleInput.value = "";  
  dateInput.value = "";  
  descriptionInput.value = "";  
  timeInput.value = "";
});

render();