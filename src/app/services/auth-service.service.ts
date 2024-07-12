import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private loggedIn: boolean = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'carta' && password === '6480') {
      this.loggedIn = true;
      this.router.navigate(['/main']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
