'use strict';

class Todo{
  constructor(title,date,description,time){
    this.title = title;
    this.date = date;
    this.description = description;
    this.time = time;
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

  todoList.todos.forEach((activity,index) => {
    const cardActivity = document.createElement('div');

    cardActivity.innerHTML = `
    <h3>${activity.title}</h3>
    <p>${activity.description}</p>
    <div>
      <input type="checkbox">
      <button>Delete</button>
      <span>${activity.time}</span>
    </div>
    `;

    const checkbox = cardActivity.querySelector('input');
    const deleteButton = cardActivity.querySelector('button');

    deleteButton.addEventListener('click', () => {
      todoList.deleteTodo(index);
    });

    taskList.appendChild(cardActivity);
  });
}

buttonInput.addEventListener('click', () => {
  const title = titleInput.value;
  const date = dateInput.value;
  const description = descriptionInput.value;
  const time = timeInput.value;

  const newTodo = new Todo(title, date, description, time);

  todoList.addTodo(newTodo);

  render();

  titleInput.value = "";  
  dateInput.value = "";  
  descriptionInput.value = "";  
  timeInput.value = "";
});

render();