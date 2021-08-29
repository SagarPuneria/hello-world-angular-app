// import { HttpClient } from '@angular/common/http';
// import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
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
    this.service.getAll()
      .subscribe(
        posts => {
          console.log(typeof this.posts); // undefined
          this.posts = posts;
          console.log(typeof this.posts); // object
          console.log(this.posts);
        }// Eventuallly it will hit AppErrorHandler class, so below error handler not required here.
        /* ,(error: HttpErrorResponse) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
          alert('An unexpected error occured.');
          console.log(error);
        } */
      );
  }

  createPost(input: HTMLInputElement) {
    // let post: any = { title: input.value } // => post.id = response['id'];

    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
          // console.log(response['id']);
          console.log(this.posts);
        },
        //(error: Response) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
        //if (error.status === 400) {
        (error: AppError) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.json());
            // this.form.setErrors(error.originalError);
          }
          else throw error;
          // OR
          /* else { // Eventuallly it will hit AppErrorHandler class, so below error handler not required here.
            alert('An unexpected error occured.');
            console.log(error);
          } */
        }
      );
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => { // response => {
          console.log(updatedPost);
        }// Eventuallly it will hit AppErrorHandler class, so below error handler not required here.
        /* , (error: HttpErrorResponse) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
          alert('An unexpected error occured.');
          console.log(error);
        } */
      );
    // OR
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post['id'])
      // this.service.deletePost(101)
      .subscribe(
        null, // () => {}, // instead of passing empty arrow function, pass null
        //(error: HttpErrorResponse) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
        //if (error.status === 404)
        (error: AppError) => { // In arrow function whenever you use type annotation, you need to put parameters in paranthesis (error: Response).
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
          // OR
          /* else { // Eventuallly it will hit AppErrorHandler class, so below error handler not required here.
            alert('An unexpected error occured.');
            console.log(error);
          } */
        }
      );
  }
}
