// Custom Pipes concept
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:10 }}
    `
})

export class CoursesComponent {
    text = `Lord cscd klv ccklds l klc sdlcdsl  csklc lksc ldlf vfnvjrnbihvbrsadcklsdnckjdsn vkjc ds fdvkld sakcnldjkvfed vkdfln`;
}