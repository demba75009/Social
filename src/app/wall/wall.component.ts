import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../model/post';


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

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.PostService.addPost({ name } as Post)
            .subscribe(post => {
                this.posts.push(post);
            });
    }



}