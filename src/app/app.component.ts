import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OauthService} from './services/oauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private oauthService: OauthService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.oauthService.isLoggedIn()) {
      this.router.navigate(['/playlists']);
    } else {
      this.router.navigate(['/login']);
    }
  }


}
