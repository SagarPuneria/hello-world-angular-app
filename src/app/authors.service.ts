import { Injectable } from '@angular/core';
/*
No need to register this dependency(AuthorsService) in main app module, if we pass this argumnet {providedIn: 'root'} in Injectable() function.
Below @Injectable({  providedIn: 'root' }) Decorator is dynamically created using Angular CLI command: $ ng g s email
*/
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors() {
    return [
      { id: 1, name: 'author' },
      { id: 2, name: 'author' },
      { id: 3, name: 'author' },
    ];
  }
}
