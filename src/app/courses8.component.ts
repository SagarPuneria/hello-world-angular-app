// Two-way Binding concept
import { NgModule } from '@angular/core';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <!-- <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/> -->

        <!-- Use ngModel directice, to avoid repetitive code in template => email = $event.target.value; -->
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    `
})

export class CoursesComponent {
    email = "me@example.com";
    onKeyUp() {
        console.log(this.email);
    }
}