// Event Filtering concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <input (keyup)="onKeyUp($event)"/>
        <br/>
        <!-- Event Filtering -->
        <input (keyup.enter)="onKeyUp2()"/>
    `
})

export class CoursesComponent {
    onKeyUp($event) {
        if ($event.keyCode === 13) console.log("First input ENTER was pressed", $event);
    }
    onKeyUp2() {
        console.log("Second input ENTER was pressed");
    }
}