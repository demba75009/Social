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


    }



