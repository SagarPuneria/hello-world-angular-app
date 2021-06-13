import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
// import { CoursesComponent } from './courses2.component';
// import { CoursesComponent } from './courses3.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent, // This Component was manually created
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
