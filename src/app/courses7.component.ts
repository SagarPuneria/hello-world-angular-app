// Template Variables concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <input (keyup.enter)="onKeyUp($event)"/>
        <br/>
        <!-- Template Variables -->
        <input #email (keyup.enter)="onKeyUp2(email.value)"/>
    `
})

export class CoursesComponent {
    onKeyUp($event) {
        console.log($event.target.value);
    }
    onKeyUp2(email) {
        console.log(email);
    }
}