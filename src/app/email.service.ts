import { LogService } from './log.service';
import { Injectable } from '@angular/core';
/*
No need to register this dependency(EmailService) in main app module, if we pass this argumnet {providedIn: 'root'} in Injectable() function.
Below @Injectable({  providedIn: 'root' }) Decorator is dynamically created using Angular CLI command: $ ng g s email
*/
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  services; // 'services' implicitly has an 'any' type
  // OR services: string[];
  constructor(logService: LogService) {
    console.log('Before getService, this.services:', this.services)
    this.services = logService.logService(["get service 1", "get service 2", "get service 3"])
    console.log('After getService, this.services:', this.services)
  }
  getEmails() {
    return ["unit.test@1.com", "unit.test@2.com", "unit.test@3.com"];
  }
}
