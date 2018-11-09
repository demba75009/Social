import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from './model/post';


@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

    posts: Post[];


    constructor(private PostService: PostService) {

    }



    getPOSTS(): void {
        this.PostService.getPOSTS()
            .subscribe(posts => this.posts = posts);    }


    ngOnInit() {

            this.getPOSTS();
    }

    add(title:string): void {

        title = title.trim();
        if (!title) { return; }
        this.PostService.addPost( {title}  as Post)
            .subscribe(post => {
                this.posts.push(post);
            });

    }
    addBody(body:string): void {

        body = body.trim();
        if (!body) { return; }
        this.PostService.addPost( {body}  as Post)
            .subscribe(post => {
                this.posts.push(post);
            });

    }

    delete(post: Post): void {
        this.posts = this.posts.filter(h => h !== post);
        this.PostService.deletePost(post).subscribe();
    }


}



