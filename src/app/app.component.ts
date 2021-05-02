import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  // coursesList = [];
  coursesList = [1, 2];
  viewMode = 'somthingElse';
  listOfCourses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];
  onAdd() {
    this.listOfCourses.push({ id: 4, name: 'course4' })
  }
  onRemove(course) {
    let index = this.listOfCourses.indexOf(course);
    this.listOfCourses.splice(index, 1);
  }
  onChange(course) {
    course.name = 'UPDATED';
  }
}
