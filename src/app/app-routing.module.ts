import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PlaylistsComponent} from './views/playlists/playlists.component';
import {LoginComponent} from './views/login/login.component';
import {OauthService} from './services/oauth.service';
import {AlbumsComponent} from './views/albums/albums.component';
import {TracksComponent} from './views/tracks/tracks.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'albums/:userId/:playlistId', component: AlbumsComponent},
  {path: 'tracks/:albumId', component: TracksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    initialNavigation: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private oauthService: OauthService) {
    this.configureOauthService();
  }

  private configureOauthService(): void {
    this.oauthService.authenticationUri = 'https://accounts.spotify.com/authorize';
    this.oauthService.clientId = '052ae0bc7d7347a390fc36bf8836fe75';
    this.oauthService.scope = 'playlist-read-private';
    this.oauthService.redirectUri = window.location.origin;
    this.oauthService.extractToken();
  }
}
