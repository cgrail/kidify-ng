import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {OauthService} from './oauth.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {

  constructor(private http: Http, private oauthService: OauthService) {
  }

  getPlaylists(): Promise<any> {
    return this.http.get('https://api.spotify.com/v1/me/playlists', this.getHttpOptions())
      .toPromise()
      .then(response => response.json())
      .then(function (result) {
        return result.items;
      });
  }

  getAlbums(userId: String, playlistId: String): Promise<any> {
    const url = 'https://api.spotify.com/v1/users/' + userId + '/playlists/' + playlistId + '?fields=tracks.items(track(album(name,href)))';
    return this.http.get(url, this.getHttpOptions())
      .toPromise()
      .then(response => response.json())
      .then(function (result) {
        return result.tracks.items.map((item) => item.track.album.name);
      });
  }

  private getHttpOptions(): RequestOptions {
    const headers = new Headers({'Authorization': 'Bearer ' + this.oauthService.getToken()});
    const options = new RequestOptions({headers: headers});
    return options;
  }

}
