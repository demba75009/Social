//on importe les bibliothéque nécéssaire
import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../wall/model/post';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WallComponent}      from '../wall/wall.component';

import { PostService }  from '../post.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
    @Input() post:Post;
    selectedPost: Post;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private location: Location
    ) {}
  ngOnInit() {
        //on initialise la fonction

      this.getPost();

  }
  //on crée une fonction qui va selectionnez le post choisi par le client
    onSelect(post: Post): void {
        this.selectedPost = post;
    }
//fonction qui sauvegarde les modifications
    save(): void {
        this.postService.updatePost(this.post)
            .subscribe(() => this.goBack());
    }

    //retour en arriere
    goBack(): void {
        this.location.back();
    }
//on crée une fonction qui va cherchez un post spécifique selon son id
    getPost(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.postService.getPost(id)
            .subscribe(post => this.post = post);
    }

}
