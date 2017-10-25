import {Component, OnInit} from '@angular/core';
import {Track} from '../../vo/track';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html'
})
export class TracksComponent implements OnInit {

  tracks: Track[];

  constructor(private route: ActivatedRoute,
              private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    const albumUrl = this.route.snapshot.paramMap.get('albumUrl');
    this.spotifyService.getTracks(albumUrl).then((tracks) => {
      this.tracks = tracks;
    });
  }

}
