import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OauthService} from './oauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  loggedIn = false;

  constructor(private oauthService: OauthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.configureOauthService();
    this.loggedIn = this.oauthService.isLoggedIn();

    if (this.loggedIn) {
      this.router.navigate(['/playlists']);
    }
  }

  private configureOauthService(): void {
    this.oauthService.authenticationUri = 'https://accounts.spotify.com/authorize';
    this.oauthService.clientId = '052ae0bc7d7347a390fc36bf8836fe75';
    this.oauthService.scope = 'playlist-read-private';
    this.oauthService.redirectUri = window.location.origin;
  }

  login(): void {
    this.oauthService.login();
  }
}
