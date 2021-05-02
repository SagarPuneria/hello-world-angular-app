// This Component was manually created

import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    // template: '<h2>Course structure</h2>'
    // template: '<h2>{{title}}</h2>'
    // template: '<h2>{{getTitle()}}</h2>'

    // ngFor is structural directive
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
        </ul>
    `
})

export class CoursesComponent {
    title = "List of courses";
    getTitle() {
        return this.title
    }
    // courses: string[];//OR courses;
    courses = ["course1", "course2", "course3"];

    /*
    // Wrong approach: This has two problems with this approach
    constructor() {
        let service = new CoursesService();
        this.courses = service.getCourses();
    } */

    // Correct approach ...
    constructor(service: CoursesService) {
        console.log('Before service, this.courses:', this.courses)
        this.courses = service.getCourses();
        console.log('After service, this.courses:', this.courses)
    }
}