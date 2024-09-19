import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import TodoModel from "../../../models/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  getAllTodos(username: string | null): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username: string | null, id: number): Observable<string> {
    return this.http.delete<string>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}
