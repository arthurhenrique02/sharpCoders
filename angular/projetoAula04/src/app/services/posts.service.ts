import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // import HttpClient and inject it into the constructor
  constructor(private http:HttpClient) { }

  // URLs
  private url = 'https://jsonplaceholder.typicode.com/posts';

  // Observable will make requests and will warn when a new thing is found in the server. Executes requests in a period of time

  // Subscriber: Receives the request`s response

  // get all posts
  listPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }


}
