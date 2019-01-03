import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../wall/model/post';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WallComponent}      from '../wall/wall.component';

import { PostService }  from '../post.service';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
    posts: Post[] = [];

  constructor(private postService: PostService,private location: Location) { }

  ngOnInit() {
      this.getPOSTS();
  }

    getPOSTS(): void {
        this.postService.getPOSTS()
            .subscribe(posts => this.posts =  posts.slice(1, 5));    }
    goBack(): void {
        this.location.back();
    }


}
