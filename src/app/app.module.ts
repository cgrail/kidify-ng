import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {MdButtonModule, MdListModule, MdToolbarModule} from '@angular/material';

import {AppComponent} from './app.component';

import {OauthService} from './services/oauth.service';
import {SpotifyService} from './services/spotify.service';

import {AppRoutingModule} from './app-routing.module';

import {LoginComponent} from './views/login/login.component';
import {PlaylistsComponent} from './views/playlists/playlists.component';
import {AlbumsComponent} from './views/albums/albums.component';
import {TracksComponent} from './views/tracks/tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    LoginComponent,
    AlbumsComponent,
    TracksComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule,
    AppRoutingModule
  ],
  providers: [
    SpotifyService,
    OauthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
