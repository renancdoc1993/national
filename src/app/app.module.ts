import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Inicializa Firebase
    provideAuth(() => getAuth()), // Configura autenticação
    provideFirestore(() => getFirestore()) // Configura Firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
