import {Component, Input} from '@angular/core';
import {HardcodedAuthenticationService} from "../services/hardcodedAuthentication/hardcoded-authentication.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() isHidden: boolean | undefined;

  constructor(private service: HardcodedAuthenticationService, private router: Router) {}

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
  }
}
