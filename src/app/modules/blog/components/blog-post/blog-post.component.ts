import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BlogPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() post:BlogPost;
  @Output() deletePost:EventEmitter<BlogPost> = new EventEmitter(); // Removed the button for this for the time being
  
  constructor() { }

  ngOnInit() {
  }

  onDelete(post) {
    this.deletePost.emit(post)
  }
}
