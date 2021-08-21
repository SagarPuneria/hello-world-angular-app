// import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;


  // In Angular2+ we use constructor to do the DI(Dependency Injection).
  // Called first time before the ngOnInit().
  // constructor(private http: HttpClient) { // So in our component we should not HTTP class. Instead we should work with our services.
  constructor(private service: PostService) {
    /*
    // We shouldn't perform expensive operations like calling the server.
    // Do not call HTTP services in the constructor of your components. If you need initialization, use ngOnInit() method.
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
    this.service.getPosts()
      .subscribe(
        response => {
          console.log(typeof this.posts); // undefined
          this.posts = response;
          console.log(typeof this.posts); // object
          console.log(this.posts);
        },
        (error: HttpErrorResponse) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
          alert('An unexpected error occured.');
          console.log(error);
        }
      );
  }

  createPost(input: HTMLInputElement) {
    // let post: any = { title: input.value } // => post.id = response['id'];

    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
          // console.log(response['id']);
          console.log(this.posts);
        },
        //(error: HttpErrorResponse) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
        //if (error.status === 400) {
        (error: AppError) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
          if (error instanceof NotFoundError) {
            // this.form.setErrors(error.json())
          }
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }
        }
      );
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response);
        },
        (error: HttpErrorResponse) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
          alert('An unexpected error occured.');
          console.log(error);
        }
      );
    // OR
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.service.deletePost(post['id'])
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        //(error: HttpErrorResponse) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
        //if (error.status === 404)
        (error: AppError) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else {
            alert('An unexpected error occured.');
            console.log(error);
          }
        }
      );
  }
}
