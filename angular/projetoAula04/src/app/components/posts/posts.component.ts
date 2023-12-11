import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../../models/posts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

    // override the default constructor
    constructor(private Postservice: PostsService) {}

    // posts list
    posts:Post[] = [];

    // on initialize
    ngOnInit():void{
      this.listPosts();
    }

    // list all posts
    listPosts():void{
        this.Postservice.listPosts().subscribe(
          response => {
            this.posts = response;
          }
        );
    }
}
