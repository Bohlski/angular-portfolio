import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog.service';
import { BlogPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: []
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  deletePost(post: BlogPost) {
    // Delete the post from the UI
    this.posts = this.posts.filter(p => p.id !== post.id);
    // Delete the post from the server
    this.blogService.deletePost(post).subscribe();
  }
}