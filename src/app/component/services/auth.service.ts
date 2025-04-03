import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  loginWithGoogle() {
      return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithOutlook() {
    return this.afAuth.signInWithPopup(new firebase.auth.OAuthProvider('microsoft.com'));
  }
}
