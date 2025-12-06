import { Component } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-debug-example',
  template: `
    <div class="container">
      <h2>Debug Example Component</h2>
      <button (click)="loadEmails()" class="load-btn">Load Emails</button>
      <div class="email-list" *ngIf="emails.length > 0">
        <h3>Emails:</h3>
        <ul>
          <li *ngFor="let email of emails" class="email-item">{{ email }}</li>
        </ul>
      </div>
      <div class="services-list" *ngIf="services.length > 0">
        <h3>Services:</h3>
        <ul>
          <li *ngFor="let service of services" class="service-item">{{ service }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .container { padding: 20px; }
    .load-btn { padding: 10px 20px; background: #007bff; color: white; border: none; cursor: pointer; }
    .email-item, .service-item { margin: 5px 0; }
  `]
})
export class DebugExampleComponent {
  emails: string[] = [];
  services: string[] = [];

  constructor(private emailService: EmailService) {}

  loadEmails(): void {
    this.emails = this.emailService.getEmails();
    this.services = this.emailService.services || [];
  }
}