// Style Binding concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <!-- Style Bing Concept(https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp) -->
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    `
})

export class CoursesComponent {
    isActive = false; // DOCTYPE html: <button style="background-color: white;">Save</button>
    // isActive = true; // DOCTYPE html: <button style="background-color: blue;">Save</button>
}