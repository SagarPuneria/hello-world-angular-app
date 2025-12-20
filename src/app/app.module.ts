import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
// import { CoursesComponent } from './courses2.component';
// import { CoursesComponent } from './courses3.component';
// import { CoursesComponent } from './courses4.component';
// import { CoursesComponent } from './courses5.component';
// import { CoursesComponent } from './courses6.component';
// import { CoursesComponent } from './courses7.component';
// import { CoursesComponent } from './courses8.component'; // import { FormsModule }
// import { CoursesComponent } from './courses9.component';
// import { CoursesComponent } from './courses10.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent, // This Component was manually created
    SummaryPipe, // This is required for courses10.component
    FavoriteComponent,
    TitleCasePipe, // This is required for app.component
  ],
  imports: [
    BrowserModule,
    FormsModule, // app.component.ts and courses8.component.ts => ngModel directive is defiend in FormsModule('ngModel' not available by default, so we need to import FormsModule)
    CommonModule // This module is required for all built-in pipes like 'currency', 'date', and 'number'
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
