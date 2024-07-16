import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ErrorComponent} from "./error/error.component";
import {TodoListComponent} from "./todo-list/todo-list.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "welcome/:name", component: WelcomeComponent},
  {path: "todos", component: TodoListComponent},
  {path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
