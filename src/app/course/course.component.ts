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
  constructor(public service2: EmailService) {
    console.log('Before service2, this.emails:', this.emails)
    this.emails = service2.getEmails();
    console.log('After service2, this.emails:', this.emails)
  }
  ngOnInit() {
    console.log('Component name: app-course, ngOnInit called');
  }

}