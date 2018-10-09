import { Component, OnInit } from '@angular/core';
import { POSTS } from '../mock/postm';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

 posts = POSTS;
 posts1 : POSTS[];

  constructor(private postService: postservice) {

  }
    getposts(): void {
        this.posts = this.postService.getposts()
    }
  ngOnInit() {
      this.getPost();
  }

}