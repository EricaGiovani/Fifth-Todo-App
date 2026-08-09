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
}