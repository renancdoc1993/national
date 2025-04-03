import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password);
  }

  register() {
    this.authService.register(this.email, this.password);
  }

  forgotPassword() {
    this.authService.resetPassword(this.email);
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  loginWithOutlook() {
    this.authService.loginWithOutlook();
  }

}
