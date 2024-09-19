import {Component, Input, OnInit} from '@angular/core';
import {HardcodedAuthenticationService} from "../services/hardcodedAuthentication/hardcoded-authentication.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() isHidden: boolean | undefined;
  username: string | null;

  constructor(private service: HardcodedAuthenticationService, private router: Router) {
    this.username = "";
  }

  ngOnInit(): void {
    this.username = this.service.username;
    console.log(this.username);
  }

  userIsLoggedIn() {
    return this.service.userIsLoggedIn();
  }

  logout(): void {
    this.service.logout();
    this.router.navigate(["/"]).then((success: boolean) => {
      if (success) {
        console.log("User logged out");
      }
    }).catch((error: HttpErrorResponse) => {
      console.log(error);
    });
  };

  goToHomePage() {
    this.router.navigate(["welcome", this.username]).then((res: boolean) => {
      console.log("Navigate to HomePage is done!");
    }).catch((error: HttpErrorResponse) => {
      console.log(error.message);
    });
  }
}



