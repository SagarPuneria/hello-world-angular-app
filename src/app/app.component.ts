import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  course = [1, 2];
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];
  viewMode = 'map';
  onAdd() {
    this.courses.push({ id: 4, name: 'course' });
  }
  onRemove(course1) {
    let index = this.courses.indexOf(course1);
    this.courses.splice(index, 1);
  }
  onChange(course1) {
    course1.name = 'UPDATED';
  }
  loadCourses() {
    this.courses = [
      { id: 5, name: 'course5' },
      { id: 6, name: 'course6' },
      { id: 7, name: 'course7' }
    ];
  }
  trackCourse(i, c) {
    console.log(i, c);
    return c ? c.id : undefined;
  }
  canSave = true;
  task = {
    title: 'Review applications',
    // assignee: null
    assignee: {
      name: 'Sagar Puneria'
    }
  }
}
