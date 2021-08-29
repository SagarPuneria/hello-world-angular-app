import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root' // No need to import { PostService } from './services/post.service'; in app.module.ts

})
export class PostService extends DataService {

  constructor(http: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts', http);
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