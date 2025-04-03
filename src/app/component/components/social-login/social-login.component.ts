import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent {
  loginWithGoogle() {
    console.log("Login com Google...");
  }

  loginWithOutlook() {
    console.log("Login com Outlook...");
  }
}
