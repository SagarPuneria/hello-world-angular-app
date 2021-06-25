import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoriteUserComponent } from './favorite-user/favorite-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    FavoriteUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
