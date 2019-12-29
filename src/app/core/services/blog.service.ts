import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BlogPost } from 'src/app/shared/interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  postsLimit = '?_limit=10';
  constructor(private http: HttpClient) { }

  // Make a request to jsonplaceholder and return an observable for the posts
  getPosts(): Observable<BlogPost[]> {
    const url = `${this.postsUrl}${this.postsLimit}`;
    return this.http.get<BlogPost[]>(url);
  }

  // Delete the given post from the HttpClient
  deletePost(post: BlogPost): Observable<BlogPost> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.delete<BlogPost>(url, httpOptions);
  }
}
