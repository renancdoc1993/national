import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/pages/login/login.component';
import { HomeComponent } from './component/pages/home/home.component';
import { VideoPlayerComponent } from './component/pages/video-player/video-player.component';
// Importações corretas do Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { LoginCardComponent } from './component/components/login-card/login-card.component';
import { ButtonComponent } from './component/components/button/button.component';
import { InputEmailComponent } from './component/components/input-email/input-email.component';
import { InputPasswordComponent } from './component/components/input-password/input-password.component';
import { LoginFormComponent } from "./component/components/login-form/login-form.component";
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VideoPlayerComponent,
    LoginCardComponent,
    LoginFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase), // 🔥 Inicializa Firebase
    AngularFireAuthModule, // 🔥 Módulo para autenticação
    AngularFireAnalyticsModule, // 🔥 Módulo para analytics
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    InputPasswordComponent,
    InputEmailComponent
],


  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Inicializa Firebase
    provideAuth(() => getAuth()), // Configura autenticação
    provideFirestore(() => getFirestore()) // Configura Firestore
  ],
  bootstrap: [AppComponent]


})

export class AppModule {
}
