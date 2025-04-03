import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  videos = [
    { id: 1, title: 'Filme 1', thumb: 'assets/thumb1.jpg' },
    { id: 2, title: 'Filme 2', thumb: 'assets/thumb2.jpg' }
  ];

  constructor(private router: Router) {}

  watchVideo(id: number) {
    this.router.navigate(['/video', id]);
  }
}

