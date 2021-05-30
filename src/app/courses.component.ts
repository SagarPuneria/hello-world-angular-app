// Property Binding concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
    <!-- String interpolation concept -->
        <h2>{{ title }}</h2>
        <img src="{{ imageUrl }}"/>

    <!-- Property Binding concept -->
        <h2 [textContent]="title"></h2>
        <img [src]="imageUrl" />
    `
})

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200/"
}