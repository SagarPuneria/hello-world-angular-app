// Template Variables concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <!-- <input (keyup.enter)="onKeyUp($event)"/> -->

        <!-- Template Variables -->
        <input #email (keyup.enter)="onKeyUp(email.value)"/>
    `
})

export class CoursesComponent {
    /* onKeyUp($event) {
        console.log($event.target.value);
    } */
    onKeyUp(email) {
        console.log(email);
    }
}