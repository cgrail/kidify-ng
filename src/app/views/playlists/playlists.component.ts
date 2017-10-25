import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html'
})
export class PlaylistsComponent implements OnInit {

  playlists = [];

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {

    this.spotifyService.getPlaylists().then((playlists) => {
      this.playlists = playlists;
    });
  }

}
