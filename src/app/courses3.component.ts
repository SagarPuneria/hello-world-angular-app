// Adding Bootstrap and Class Binding concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <!-- Adding Bootstrap concept -->
        <!-- <button class="btn btn-primary">Save</button> -->
        
        <!-- Class Binding concept -->
        <button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})

export class CoursesComponent {
    // isActive = false; // DOCTYPE html: <button class="btn btn-primary">Save</button>
    isActive = true; // DOCTYPE html: <button class="btn btn-primary active">Save</button>
}