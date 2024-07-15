import {AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  usernameValue: string;
  passwordValue: string;
  loginError: string;
  @ViewChild("usernameEl") usernameEl!: ElementRef;
  @ViewChild("passwordEl") passwordEl!: ElementRef;

  constructor() {
    this.usernameValue = "";
    this.passwordValue = "";
    this.loginError = "";
  }

  ngAfterViewInit(): void {
    this.focusOnElement(this.usernameEl);
    this.focusOnElement(this.passwordEl);
  }


  login(userForm: NgForm) {
    if (userForm.valid) {
      let validCredentials: boolean= this.usernameValue === "admin" && this.passwordValue === "admin";
      if (validCredentials) {
        console.log(userForm.value);
        userForm.resetForm();
        this.usernameValue = "";
        this.passwordValue = "";
        this.loginError = "";
      } else {
        this.loginError = "Invalid Credentials";
      }
    } else {
      this.loginError = "";
    }
  }

  focusOnElement(el: ElementRef): void {
    el.nativeElement.addEventListener("focus", ()=>{
      el.nativeElement.select();
    });
  }
}
