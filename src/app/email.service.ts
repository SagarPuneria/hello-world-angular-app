import { Injectable } from '@angular/core';
/*
No need to register this dependency(EmailService) in main app module, if we pass this argumnet {providedIn: 'root'} in Injectable() function.
*/
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
  getEmails() {
    return ["unit.test@1.com", "unit.test@2.com", "unit.test@3.com"];
  }
}
