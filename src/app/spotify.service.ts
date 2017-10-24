import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

/**
 * Angular Service https://embed.plnkr.co/?show=preview
 * Spotify http://jsfiddle.net/JMPerez/62wafrm7/
 */
@Injectable()
export class SpotifyService {

    constructor(private http: Http) { }

    getPlaylists(): Promise<any> {
        return Promise.resolve(['1', '2', '3']);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
