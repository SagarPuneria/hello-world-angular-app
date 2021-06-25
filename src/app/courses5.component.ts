// Event Binding concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
    `
})

export class CoursesComponent {
    onDivClicked() {
        console.log("Div was clicked"); // Event Bubbling
    }
    onSave($event) {
        $event.stopPropagation(); // Stop Event Bubbling

        console.log("Button was clicked", $event); // Event Binding
    }
}