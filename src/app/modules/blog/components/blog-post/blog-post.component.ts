import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  blogPosts: BlogPost[];
  constructor() { }

  ngOnInit() {
  }

}
