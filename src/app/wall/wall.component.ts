import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../model/post';
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

    posts: Post[] = [
        { id: 1, name: 'Mr. Nice',body:'test',auteur:'de' },
        { id: 2, name: 'pagala', body:'test',auteur:'de' },
        { id: 3, name: 'odele',body:'test',auteur:'de' },
        { id: 4, name: 'oiinn',body:'test',auteur:'de' },
        { id: 5, name: 'Magneta',body:'test',auteur:'de' },
        { id: 6, name: 'RubberMan',body:'test',auteur:'de' },
        { id: 7, name: 'Dynama',body:'test',auteur:'de' },
        { id: 8, name: 'Dr IQ',body:'test',auteur:'de' },
        { id: 9, name: 'Magma',body:'test',auteur:'de' },
        { id: 10, name: 'Tornado',body:'test',auteur:'de' }
];
    constructor(private PostService: PostService) {

    }

    getPOSTS(): void {
        this.posts = this.PostService.getPOSTS()

    }


    ngOnInit() {
        this.getPOSTS();
    }

}