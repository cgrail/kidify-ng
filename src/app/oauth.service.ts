export class OauthService {

  private token;

  public authenticationUri: string;
  public clientId: string;
  public scope: string = null;
  public redirectUri: string;

  extractToken(): void {
    const params = this.getHashParams();
    if (params.access_token) {
      this.token = params.access_token;
      console.log(this.token);
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
