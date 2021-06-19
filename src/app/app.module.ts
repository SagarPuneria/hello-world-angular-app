import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
// import { CoursesComponent } from './courses2.component';
// import { CoursesComponent } from './courses3.component';
// import { CoursesComponent } from './courses4.component';
// import { CoursesComponent } from './courses5.component';
// import { CoursesComponent } from './courses6.component';
// import { CoursesComponent } from './courses7.component';
// import { CoursesComponent } from './courses8.component'; // import { FormsModule }

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent, // This Component was manually created
  ],
  imports: [
    BrowserModule,
    FormsModule // courses8.component.ts => ngModel directive is defiend in FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
