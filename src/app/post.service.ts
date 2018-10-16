import { Injectable } from '@angular/core';
import { Post } from './model/post';
import { POSTS } from './mock/postm';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostService {
    private postUrl = 'http://localhost/social/web/index.php/api/blog';  // URL to web api

  constructor(private http: HttpClient) {

  }



private  headers = new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,POST,OPTION,PUT,PATCH,DELETE',
    'Access-Control-Allow-Headers':'X-Requested-with, content-type',
    'Access-Control-Allow-Credentials':'true',
});


      getPOSTS(): Observable<Post[]>
      {

          return this.http.get<Post[]>(this.postUrl(headers: this.headers))
      }

}

