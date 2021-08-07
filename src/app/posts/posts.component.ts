import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts;
  /* For future visitors: In the new HttpClient (Angular 4.3+), the response object is JSON by default,
   so you don't need to do response.json().data anymore. Just use response directly. */
  constructor(http: HttpClient) {
    http.get('http://jsonplaceholder.typicode.com/posts').subscribe(response => {
      console.log(typeof this.posts); // undefined
      this.posts = response
      console.log(typeof this.posts); // object
      console.log(this.posts);
    });
    /* subscribe(
      response => console.log(response)
    ); */
  }

}
