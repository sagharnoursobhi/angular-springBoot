import {Component, OnInit} from '@angular/core';
import TodoModel from "../models/todo.model";
import TodoTableCo from "../models/todoTableCo.model";
import {TodosService} from "../services/data/todosData/todos.service";
import {HardcodedAuthenticationService} from "../services/hardcodedAuthentication/hardcoded-authentication.service";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[];
  columns!: TodoTableCo;
  username: string | null;


  constructor(private todoService: TodosService, private service: HardcodedAuthenticationService) {
    this.todos = [];
    this.columns = {
      id: "ID",
      description: "DESCRIPTION",
      isCompleted: "IS COMPLETED",
      targetDate: "Target Date",
      actions: "Actions",
    };
    this.username = "";
  }

  ngOnInit() {
    this.username = this.service.username;
    this.retrieveAllTodos();
  }

  retrieveAllTodos() {
    this.todoService.getAllTodos(this.username).subscribe({
      next: (value: TodoModel[]) => {
        this.todos = value;
      },
      error: (err: string) => {
        console.log(err);
      },

      complete: () => {
        console.log("Fetching todo items is done!");
      }
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(this.username, id).pipe(
      catchError((error: string) => {
        console.log(error);
        return of("");
      }),
    ).subscribe({
      next: (value: string) => {
        console.log(value);
        this.retrieveAllTodos();
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Todo deleted successfully!");
      }
    });
  }
}
