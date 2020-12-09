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

  getUsers(searchQuery): Observable<any[]> {
    console.log(searchQuery);
    this.apiUrl = environment.baseUrl + 'users/' + searchQuery;
    return this.httpClient.get<any>(this.apiUrl).pipe(
     retry(1),
     catchError(this.handleErrors)
   );
  }

  getUserTweets(screenName): Observable<any[]> {
    console.log(screenName);
    this.apiUrl = environment.baseUrl + 'tweets/' + screenName;
    return this.httpClient.get<any>(this.apiUrl).pipe(
     retry(1),
     catchError(this.handleErrors)
   );
  }

  getUser(screenName): Observable<any[]> {
    console.log(screenName);
    this.apiUrl = environment.baseUrl + 'user/' + screenName;
    return this.httpClient.get<any>(this.apiUrl).pipe(
     retry(1),
     catchError(this.handleErrors)
   );
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

