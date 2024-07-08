import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {}

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthServiceService) {}

  login(): void {
    if (!this.authService.login(this.username, this.password)) {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
