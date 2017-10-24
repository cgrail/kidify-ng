import {Component, OnInit} from '@angular/core';
import {OauthService} from './oauth.service';
import {SpotifyService} from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  links = [];

  loggedIn = false;

  constructor(private spotifyService: SpotifyService, private oauthService: OauthService) {
  }

  ngOnInit(): void {
    this.configureOauthService();
    this.loggedIn = this.oauthService.isLoggedIn();

    if (!this.loggedIn) {
      return;
    }

    this.spotifyService.getPlaylists().then((playlist) => {
      this.links = playlist;
    });
    this.links = ['1'];
  }

  private configureOauthService(): void {
    this.oauthService.authenticationUri = 'https://accounts.spotify.com/authorize';
    this.oauthService.clientId = '052ae0bc7d7347a390fc36bf8836fe75';
    this.oauthService.scope = 'user-read-private user-read-email';
    this.oauthService.redirectUri = window.location.origin + window.location.pathname;
  }

  login(): void {
    this.oauthService.login();
  }
}
