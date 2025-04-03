import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";
import { InputPasswordComponent } from "../input-password/input-password.component";
import { InputEmailComponent } from "../input-email/input-email.component";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  imports: [ButtonComponent, InputPasswordComponent, InputEmailComponent], // Remova 'imports'
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private AuthService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.AuthService.login(email, password)
        .then(userCredential => {
          console.log('✅ Login realizado com sucesso:', userCredential);
          alert('Login realizado com sucesso!');
        })
        .catch(error => {
          console.error('❌ Erro ao fazer login:', error);
          alert('Erro ao fazer login: ' + error.message);
        });
    } else {
      alert('⚠️ Preencha corretamente os campos antes de enviar.');
    }
  }
}
