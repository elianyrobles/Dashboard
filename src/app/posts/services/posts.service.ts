import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPostById(id: string): Observable<Post> {
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    return this.http.get<Post>(url);
  }
}
