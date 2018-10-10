import { Component, OnInit } from '@angular/core';
import { POSTS } from '../mock/postm';
import { PostService } from '../post.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

    posts: POSTS[];
    constructor(private PostService: PostService) {

    }

    getPOSTS(): void {
        this.posts = this.PostService.getPOSTS()

    }


    ngOnInit() {
        this.getPOSTS();
    }

}