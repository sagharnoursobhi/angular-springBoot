import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DividerModule } from 'primeng/divider';
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TableModule } from 'primeng/table';
import { MenuComponent } from './menu/menu.component';
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    TodoListComponent,
    MenuComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DividerModule,
        ButtonModule,
        FormsModule,
        InputTextModule,
        MessageModule,
        MessagesModule,
        TableModule,
        CardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
