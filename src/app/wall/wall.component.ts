//on importe les différentes bibliothéque
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from './model/post';


@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
//on utilise le tableau Post dans la biblliothéque post
    posts: Post[];

    constructor(private PostService: PostService) {

    }


// on va chechez tout les post présent dans la bdd

    getPOSTS(): void {
        this.PostService.getPOSTS()
            .subscribe(posts => this.posts = posts);    }


    ngOnInit() {
//on appelle la fonction dans le main
            this.getPOSTS();
    }
// cette fonction crée permet d ajouter un post

    add(title:string, body: string,auteur:string): void {
        title = title.trim();
        body = body.trim();
        auteur = auteur.trim();

        if (!title|| !body|| !auteur) { return; }
        this.PostService.addPost( {title,body,auteur}  as Post)
            .subscribe(post => {
                this.posts.push(post);


            });



    }


// cette fonction crée  permet de supprimer un post

    delete(post: Post): void {
        this.posts = this.posts.filter(h => h !== post);
        this.PostService.deletePost(post).subscribe();
    }


}



