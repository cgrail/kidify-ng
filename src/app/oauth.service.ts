export class OauthService {

  private token;

  public authenticationUri: string;
  public clientId: string;
  public scope: string = null;
  public redirectUri: string;

  constructor() {
    const params = this.getHashParams();
    if (params.access_token) {
      this.token = params.access_token;
    }
  }

  isLoggedIn(): boolean {
    return this.token;
  }

  public getToken(): String {
    return this.token;
  }

  login(): void {
    let url = this.authenticationUri;
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(this.clientId);
    url += '&scope=' + encodeURIComponent(this.scope);
    url += '&redirect_uri=' + encodeURIComponent(this.redirectUri);

    window.location.href = url;
  }

  private getHashParams(): any {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

}
