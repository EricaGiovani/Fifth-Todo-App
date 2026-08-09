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