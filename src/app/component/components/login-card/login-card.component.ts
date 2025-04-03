import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-card',
  standalone: false,
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {
  @Input() title: string = 'Login';
}
