import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  // private isLogin: boolean = false;

  get isLoggedIn() {

    if (sessionStorage.getItem('token')) {
      return true;
    }

    return false;

  }

  constructor(private router: Router) { }

  login(userName: string, password: string) {
    sessionStorage.setItem('token', 'token');
    this.router.navigate(['/sidebar']);
  }


  logout() {
    // this.isLogin = false;
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
