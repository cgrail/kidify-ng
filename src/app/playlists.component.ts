import {Component, OnInit} from '@angular/core';
import {SpotifyService} from './spotify.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html'
})
export class PlaylistsComponent implements OnInit {

  links = [];

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {

    this.spotifyService.getPlaylists().then((playlist) => {
      this.links = playlist;
    });
  }

}
