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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
