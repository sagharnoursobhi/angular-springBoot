import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    sessionStorage.setItem("username", username);
    return username === "28minutes" && password === "1234";
  }

  get username(): string | null {
    return sessionStorage.getItem("username");
  }

  userIsLoggedIn(): boolean | null {
    return sessionStorage.getItem("username") !== null;
  }

  logout() {
    sessionStorage.removeItem("username");
  }
}
