import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {

  }

  // Login com email e senha
  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home']);
    } catch (error) {
      const errMsg = (error as Error).message || "Erro desconhecido";
      alert("Erro ao fazer login: " + errMsg);
    }
  }

  // Registro de usuário
  async register(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      alert("Conta criada com sucesso!");
    } catch (error) {
      const errMsg = (error as Error).message || "Erro desconhecido";
      alert("Erro ao cadastrar: " + errMsg);
    }
  }

  // Resetar senha
  async resetPassword(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
      alert("Um e-mail de redefinição de senha foi enviado.");
    } catch (error) {
      const errMsg = (error as Error).message || "Erro desconhecido";
      alert("Erro ao enviar e-mail: " + errMsg);
    }
  }

  // Login com Google
  async loginWithGoogle() {
    try {
      await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.router.navigate(['/home']);
    } catch (error) {
      const errMsg = (error as Error).message || "Erro desconhecido";
      alert("Erro ao fazer login com Google: " + errMsg);
    }
  }

  // Login com Outlook (Microsoft)
  async loginWithOutlook() {
    try {
      await this.afAuth.signInWithPopup(new firebase.auth.OAuthProvider('microsoft.com'));
      this.router.navigate(['/home']);
    } catch (error) {
      const errMsg = (error as Error).message || "Erro desconhecido";
      alert("Erro ao fazer login com Outlook: " + errMsg);
    }
  }

  // Logout
  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }

  // Obtém usuário logado
  getUser() {
    return this.afAuth.authState;
  }
}
