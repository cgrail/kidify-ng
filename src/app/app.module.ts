import { BrowserModule } from '@angular/platform-browser';
import { MdButtonModule, MdListModule, MdToolbarModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpotifyService } from './spotify.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    MdButtonModule,
    MdListModule,
    MdToolbarModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
