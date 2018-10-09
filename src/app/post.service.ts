import { Injectable } from '@angular/core';
import { Post } from './model/post';
import { POSTS } from './mock/postm';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
}

getpost(): Post[] {
    return POSTS;
}
