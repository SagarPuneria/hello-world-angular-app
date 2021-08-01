import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NestedFormGroupsComponent } from './nested-form-groups/nested-form-groups.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NestedFormGroupsComponent,
    NewCourseFormComponent,
    FormBuilderComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
