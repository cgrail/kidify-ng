import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "./spotify.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  links = [];

  constructor(
    private spotifyService: SpotifyService
  ){}

  ngOnInit(): void {
    this.spotifyService.getPlaylists().then((playlist) => {
      this.links = playlist;
    });
    this.links = ["1"];
  }
}
