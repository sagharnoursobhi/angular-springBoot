import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const isLoggedIn = sessionStorage.getItem("username") !== null;
  if (!isLoggedIn) {
    const router = inject(Router);
    router.navigate(["/"]).then((success: boolean) => {
      console.log(success);
    });
    return false;
  }

  return true;
};
