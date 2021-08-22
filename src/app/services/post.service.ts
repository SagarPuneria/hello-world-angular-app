import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root' // No need to import { PostService } from './services/post.service'; in app.module.ts

})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        catchError((error: Response) => {
          if (error.status === 400)
            // return Observable.throw(new BadInput(error.json())); // Observable.throw is deprecated.
            return throwError(new BadInput(error.json()));

          return throwError(new AppError(error.json()));
        })
      );
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post['id'], JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404)
            return throwError(new NotFoundError);
          return throwError(new AppError(error));
          // return Observable.throw(new AppError(error)) // Observable.throw is deprecated.
        })
      );
  }
}

/*
$ ng g s post
CREATE src/app/post.service.spec.ts (323 bytes)
CREATE src/app/post.service.ts (133 bytes)
$ cd src/app/
$ mkdir services
$ mv post.service.* services/
*/