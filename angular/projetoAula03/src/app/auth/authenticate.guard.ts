import { CanActivateFn, Router } from '@angular/router';

export const authenticateGuard: CanActivateFn = (route, state) => {
  // create router
  let router = new Router();

  // validate
  // if user is not logged in, redirect to login page
  if (localStorage.getItem('email') == undefined) {
    router.navigateByUrl('/login');
  }

  // enable access by default
  return true;
};
