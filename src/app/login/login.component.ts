import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../services/hardcodedAuthentication/hardcoded-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit, OnInit {
  usernameValue: string;
  passwordValue: string;
  loginError: string;
  user: string | null;
  isUserLoggedIn: boolean | undefined;
  @ViewChild("usernameEl") usernameEl!: ElementRef;
  @ViewChild("passwordEl") passwordEl!: ElementRef;

  constructor(private router: Router, private service: HardcodedAuthenticationService) {
    this.usernameValue = "";
    this.passwordValue = "";
    this.loginError = "";
    this.user = "";
  }

  ngAfterViewInit(): void {
    this.focusOnElement(this.usernameEl);
    this.focusOnElement(this.passwordEl);
  }

  ngOnInit(): void {
    this.user = this.service.username;
  }

  login(userForm: NgForm) {
    if (userForm.valid) {
      let validCredentials: boolean = this.service.authenticate(this.usernameValue, this.passwordValue);
      if (validCredentials) {
        this.router.navigate(["welcome", this.usernameValue]).then((success) => {
          console.log(success, "Navigation is performed successfully");
          userForm.resetForm();
          this.usernameValue = "";
          this.passwordValue = "";
          this.loginError = "";
        })
          .catch((error) => console.log(error));
      } else {
        this.loginError = "Invalid Credentials";
      }
    } else {
      this.loginError = "";
    }
  }

  focusOnElement(el: ElementRef): void {
   if (el) {
     el.nativeElement.addEventListener("focus", () => {
       el.nativeElement.select();
     });
   }
  }

  userIsLoggedIn() {
    return this.service.userIsLoggedIn();
  }

  userLoggedOut() {
    this.service.logout();
  }
}
