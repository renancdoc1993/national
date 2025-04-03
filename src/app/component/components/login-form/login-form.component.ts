import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";
import { InputPasswordComponent } from "../input-password/input-password.component";
import { InputEmailComponent } from "../input-email/input-email.component";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  standalone: false, // ✅ Permite importação independente no Angular moderno

})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    // Criar o formulário com validações
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      alert('⚠️ Preencha corretamente os campos antes de enviar.');
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password)
      .then(userCredential => {
        console.log('✅ Login realizado com sucesso:', userCredential);
        alert('🎉 Login realizado com sucesso!');
      })
      .catch(error => {
        console.error('❌ Erro ao fazer login:', error);
        this.handleLoginError(error);
      });
  }

  private handleLoginError(error: any) {
    let errorMessage = 'Erro ao fazer login. Tente novamente.';

    if (error.code === 'auth/user-not-found') {
      errorMessage = 'Usuário não encontrado. Verifique o e-mail.';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = 'Senha incorreta. Tente novamente.';
    } else if (error.code === 'auth/too-many-requests') {
      errorMessage = 'Muitas tentativas. Tente mais tarde.';
    }

    alert(errorMessage);
  }
}
