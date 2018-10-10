import { Injectable } from '@angular/core';
import { Post } from './model/post';
import { POSTS } from './mock/postm';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {}

      getPOSTS(): Post[]
      {

          return POSTS;
      }

}

