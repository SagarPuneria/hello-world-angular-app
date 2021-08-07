import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  private url = 'http://jsonplaceholder.typicode.com/posts';


  // In Angular2+ we use constructor to do the DI(Dependency Injection).
  // Called first time before the ngOnInit().
  constructor(private http: HttpClient) {
    /*
    // We shouldn't perform expensive operations like calling the server.
    http.get(this.url).subscribe(response => {
      console.log(typeof this.posts); // undefined
      this.posts = response;
      console.log(typeof this.posts); // object
      console.log(this.posts);
    });*/
    /* For future visitors: In the new HttpClient (Angular 4.3+), the response object is JSON by default,
       so you don't need to do response.json().data anymore. Just use response directly. */
    /* .subscribe(
      response => console.log(response)
    ); */
  }
  ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges()
    this.http.get(this.url).subscribe(response => {
      console.log(typeof this.posts); // undefined
      this.posts = response;
      console.log(typeof this.posts); // object
      console.log(this.posts);
    });
  }

  createPost(input: HTMLInputElement) {
    // let post: any = { title: input.value } // => post.id = response['id'];

    let post = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
        // console.log(response['id']);
        console.log(this.posts);
      });
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post['id'], JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });
    // OR
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post['id'])
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}