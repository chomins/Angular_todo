import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todos = [
  
  ];

  addTodo(newTodoLabel) {
    let newTodo = {
      label: newTodoLabel,
      done: false,
      priarty: 0
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.label !== todo.label);
  }
}
