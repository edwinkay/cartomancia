import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {}

  login(): void {
    this.loading = true;
    this.errorMessage = '';

    setTimeout(() => {
      // Simulate an async login process
      if (this.authService.login(this.username, this.password)) {
        this.loading = false;
      } else {
        this.loading = false;
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    }, 2000); // Simulated delay
  }
}
