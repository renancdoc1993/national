import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  standalone: false,
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {

  videoUrl = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const videoId = this.route.snapshot.paramMap.get('id');
    this.videoUrl = `assets/video${videoId}.mp4`;  // Simulando vídeos locais
  }
}
