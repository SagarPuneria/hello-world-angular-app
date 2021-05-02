// import { EmailService } from './email.service'; // No need to import
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent, // This Component was manually created
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
// Create new Angular project
$ ng new hello-world
? Would you like to add Angular routing? (y/N) No
? Which stylesheet format would you like to use? CSS
:
:
:
.
$ cd hello-world/
hello-world $ ng serve

// Generating component using Angular CLI
hello-world $ ng g c course
CREATE src/app/course/course.component.css (0 bytes)
CREATE src/app/course/course.component.html (21 bytes)
CREATE src/app/course/course.component.spec.ts (628 bytes)
CREATE src/app/course/course.component.ts (269 bytes)
UPDATE src/app/app.module.ts (486 bytes)

Above command stands:
ng -> Angular CLI,
g -> generatec,
c -> component,
course -> name of component.

hello-world $ ng serve

// Generating service using Angular CLI
hello-world $ ng g s email
CREATE src/app/email.service.spec.ts (328 bytes)
CREATE src/app/email.service.ts (134 bytes)

hello-world $ ng serve
*/