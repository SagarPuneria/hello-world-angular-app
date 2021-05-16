import { EmailService } from './../email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "List of emails";
  emails;
  constructor(public service: EmailService) {
    console.log('Before service, this.emails:', this.emails)
    this.emails = service.getEmails();
    console.log('After service, this.emails:', this.emails)
  }
  ngOnInit() {
  }

}