import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';


@NgModule({
  declarations: [BlogComponent, BlogPostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
