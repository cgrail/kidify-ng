import {Component, OnInit} from '@angular/core';
import {OauthService} from '../../services/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private oauthService: OauthService) {
  }

  login(): void {
    this.oauthService.login();
  }
}
