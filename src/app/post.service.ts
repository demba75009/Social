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

      getPOSTS(): Observable<Post[]>
      {
          return this.http.get<Post[]>(this.postUrl,
          {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
      }

}

