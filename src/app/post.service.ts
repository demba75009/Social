import { Injectable } from '@angular/core';
import { Post } from './wall/model/post';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PostService {

    private postUrl = 'http://localhost/social/web/index.php/api/blog';  // URL to web api

    private postUrll = 'http://localhost/social/web/index.php/api/post? author=&body=&title= ';  // URL to web api

    constructor(private http: HttpClient) {

    }

    updatePost (post: Post): Observable<any>{


        return this.http.put<Post>(this.postUrl,post,
            {headers: {'Content-Type': ' application/x-www-form-urlencoded'}})
    }

    getPost( post:Post|number): Observable<Post> {
        const id = typeof post === 'number' ? post : post.id;

        const url = `${this.postUrl}/${id}`;
        return this.http.get<Post>(url,
            {headers: {'Content-Type': ' application/x-www-form-urlencoded'}})    }

    getPOSTS(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postUrl,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})

    }

    addPost(post: Post): Observable<Post> {
        const title =   post.title;
        const body =  post.body;

        const url = `${this.postUrll }${title}`;


        return this.http.post<Post>(url,post,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
       

    }
    deletePost (post: Post| number): Observable<Post> {
        const id = typeof post === 'number' ? post : post.id;
        const url = `${this.postUrl}/${id}`;

        return this.http.delete<Post>(url,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        ;
    }
    searchPosts(term: string): Observable<Post[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.getPOSTS()

    }
    }
