import {Component, OnInit} from '@angular/core';
import TodoModel from "../models/todo.model";
import TodoTableCo from "../models/todoTableCo.model";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[];
  columns!: TodoTableCo;


  constructor() {
    this.todos = [];
    this.columns = {
      description: "DESCRIPTION",
      isCompleted: "IS COMPLETED",
      targetDate: "Target Date",
    };
  }

  ngOnInit() {
    setTimeout(() => {
      this.todos = [
        {
          id: 1,
          description: "Learn to Dance",
          done: true,
          targetDate: new Date()
        },
        {
          id: 2,
          description: "Become an Expert at Angular",
          done: false,
          targetDate: new Date()
        },
        {
          id: 3,
          description: "Learn to Cook",
          done: false,
          targetDate: new Date()
        },
        {
          id: 4,
          description: "Learn to Drive",
          done: true,
          targetDate: new Date()
        }
      ]
    }, 1000)
  }

}
