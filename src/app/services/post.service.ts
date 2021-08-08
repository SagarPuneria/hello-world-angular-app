import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

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
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post['id'], JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError((error: Response) => {
          if (error.status === 404)
            return Observable.throw(new NotFoundError);
          return Observable.throw(new AppError(error));
          // return throwError(new AppError(error))
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