import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite/favorite.component';
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
    SummaryPipe,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule // courses8.component.ts => ngModel directive is defiend in FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
