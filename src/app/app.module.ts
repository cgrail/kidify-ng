import {BrowserModule} from '@angular/platform-browser';
import {MdButtonModule, MdListModule, MdToolbarModule} from '@angular/material';
import {HttpModule} from '@angular/http';

import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OauthService} from './oauth.service';
import {SpotifyService} from './spotify.service';

import {AppRoutingModule} from './app-routing.module';

import {PlaylistsComponent} from './playlists.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent
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
