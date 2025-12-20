// Attribute Binding concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <img [src]="imageUrl" />
        <table>
            <tr>
                <!-- <td [colspAN123]="colSPan"></td> -->
                <!-- Console error: Can't bind to 'colspAN123' since it isn't a known property of 'td'.-->

                <td [colSpan]="colSPan"></td>
                <!-- NO console error: colSpan is a known property of 'td'.  -->

                <!-- Below is the use case for attribute binding, if you want to bind unknown property of the 'td' element like 'colspAN123' -->
                <td [attr.colspAN123]="colSPan"></td>
                <!-- NO console error -->

                <!-- In Angular context:
                [colSpan]="colSPan" → Sets DOM property (element.colSpan)
                [attr.colspAN123]="colSPan" → Sets HTML attribute (element.setAttribute())
                The DOM is the browser's living representation of your HTML that you can interact with via JavaScript. -->

                <!-- HTML (what you write) -->
                <!-- <td colspAN1234="5"></td> -->

            </tr>
        </table>
    `
})

export class CoursesComponent {
    colSPan = 4;
    imageUrl = "https://i.imgur.com/yXOvdOSs.jpg"
}