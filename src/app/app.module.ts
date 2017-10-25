import {BrowserModule} from '@angular/platform-browser';
import {MdButtonModule, MdListModule, MdToolbarModule} from '@angular/material';
import {HttpModule} from '@angular/http';

import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OauthService} from './services/oauth.service';
import {SpotifyService} from './services/spotify.service';

import {AppRoutingModule} from './app-routing.module';

import {PlaylistsComponent} from './views/playlists/playlists.component';
import {LoginComponent} from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    LoginComponent
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
