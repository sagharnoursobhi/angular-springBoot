import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    sessionStorage.setItem("username", username);
    return username === "28minutes" && password === "1234";
  }

  userIsLoggedIn() {
    return sessionStorage.getItem("username") !== null;
  }

  logout() {
    sessionStorage.removeItem("username");
  }
}
