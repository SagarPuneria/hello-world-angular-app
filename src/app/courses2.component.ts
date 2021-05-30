// Attribute Binding concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <img [src]="imageUrl" />
        <table>
            <tr>
                <!-- <td [colSpan]="colSpan"></td> -->
                <!-- NO console error: colSpan is a known property of 'td'.  -->

                <!-- <td [colspan]="colSpan"></td> -->
                <!-- Console error: Can't bind to 'colspan' since it isn't a known property of 'td'.-->

                <!-- Below is the case, if you want to bind unknown property of the 'td' element like 'colspan' -->
                <td [attr.colspan]="colSpan"></td>
                <!-- NO console error -->
            </tr>
        </table>
    `
})

export class CoursesComponent {
    colSpan = 2;
    imageUrl = "http://lorempixel.com/400/200/"
}