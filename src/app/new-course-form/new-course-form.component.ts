import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 1, name: 'Languages' },
  ]

  constructor() { }

  submit(course) {
    console.log(course);
  }

  ngOnInit() {
  }

}
/*
$ ng g c new-course-form
CREATE src/app/new-course-form/new-course-form.component.css (0 bytes)
CREATE src/app/new-course-form/new-course-form.component.html (30 bytes)
CREATE src/app/new-course-form/new-course-form.component.spec.ts (679 bytes)
CREATE src/app/new-course-form/new-course-form.component.ts (303 bytes)
UPDATE src/app/app.module.ts (674 bytes)
*/