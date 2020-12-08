import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TwitterUserProfile } from '../interfaces/userProfile.interface';
import { environment } from '../../../src/environments/environment';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  apiUrl: string;
  twitterFeed: Observable<TwitterUserProfile[]>;
  constructor(private httpClient: HttpClient) { }

  getTwitterUsers(searchQuery): Observable<TwitterUserProfile[]> {
    this.apiUrl = environment.baseUrl;
    this.twitterFeed = this.httpClient.get<TwitterUserProfile[]>(this.apiUrl).pipe(
      retry(1),
      map((twitterFeed: TwitterUserProfile[]) =>
        twitterFeed.map(feed => new TwitterUserProfile(feed))
      ),
      catchError(
        this.handleErrors
      )
    );
    return this.twitterFeed;
  }

  handleErrors(error: HttpErrorResponse): Observable<any>{
    let errorMessage: string;
    if (error.error instanceof ErrorEvent){
      // client side error
      errorMessage = `MESSAGE: ${error.error.message}`;
    }
    else{
      // server side error
      errorMessage = `STATUS: ${error.status} MESSAGE: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

