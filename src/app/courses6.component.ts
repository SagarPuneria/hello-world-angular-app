// Event Filtering concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <!-- <input (keyup)="onKeyUp($event)"/> -->

        <!-- Event Filtering -->
        <input (keyup.enter)="onKeyUp()"/>
    `
})

export class CoursesComponent {
    /* onKeyUp($event) {
        if ($event.keyCode === 13) console.log("ENTER was pressed", $event);
    } */
    onKeyUp() {
        console.log("ENTER was pressed");
    }
}