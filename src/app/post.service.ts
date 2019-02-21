import { Injectable } from '@angular/core';
import { Post } from './wall/model/post';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class PostService {
//on appele l'url qui va affichez les differents post
    private postUrl = 'http://localhost/social/web/index.php/api/blog';  // URL to web api
// on appelle l'url qui va nous permettre de publiez un post
    private postUrl1 = 'http://localhost/social/web/index.php/api/post?author=&title= ';  // URL to web api
    //// on appelle l'url qui va nous permettre de modifiez un post
    private postUrl2 = 'http://localhost/social/web/index.php/api/put';  // URL to web api


    constructor(private http: HttpClient) {

    }
//on modifie le post
    updatePost (post: Post): Observable<any>{
        const id = post.id;
        const url = `${this.postUrl2}/${id}`;
        return this.http.put<Post>(url,post,
            {headers: {'Content-Type': ' application/x-www-form-urlencoded'}})
    }

    //on va cherchez un post précis gràce à son id

    getPost(id: number): Observable<Post> {
        const url = `${this.postUrl}/${id}`;
        return this.http.get<Post>(url,
            {headers: {'Content-Type': ' application/x-www-form-urlencoded'}})    }


// on va chechez tout les post présent dans la bdd
    getPOSTS(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postUrl,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})

    }

// cette fonction permet d'ajoute un post
    addPost(post: Post): Observable<Post> {
        const title =   post.title;
        const body =  post.body;
        const auteur =  post.auteur;


        const url = `${this.postUrl1 }${title}&body=${body}&author=${auteur}`;


        return this.http.post<Post>(url,post,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
       

    }


// cette fonction permet de supprimer un post


    deletePost (post: Post| number): Observable<Post> {
        const id = typeof post === 'number' ? post : post.id;
        const url = `${this.postUrl}/${id}`;

        return this.http.delete<Post>(url,
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        ;
    }

    // cette fonction permet de affichez les posts en foction de ce que le client aura  écrit

    searchPosts(term: string): Observable<Post[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.getPOSTS()

    }
    }
