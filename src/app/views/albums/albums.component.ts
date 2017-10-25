import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

  playlistId: String;

  albums = [];

  constructor(private route: ActivatedRoute,
              private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.playlistId = this.route.snapshot.paramMap.get('playlistId');
    const userId = this.route.snapshot.paramMap.get('userId');
    this.spotifyService.getAlbums(userId, this.playlistId).then((albums) => {
      this.albums = albums;
    });
  }

}
