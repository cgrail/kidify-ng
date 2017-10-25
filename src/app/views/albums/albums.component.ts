import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

  playlistId: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.playlistId = this.route.snapshot.paramMap.get('playlistId');

  }

}
