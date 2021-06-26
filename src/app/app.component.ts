import { Component } from '@angular/core';
import { FavoriteComponentEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'hello-world-angular-app',
    isSelected: true
  }
  // onFavoriteChange(isFavorite: any) { // isFavorite: any => Intellisense won't work in this method, if isFavorite is object.
  // onFavoriteChange(eventArgs: { newValue: boolean }) {
  onFavoriteChange(eventArgs: FavoriteComponentEventArgs) { // To make FavoriteComponentEventArgs reusable across the app, import from FavoriteComponent.
    console.log("Favorite changed:", eventArgs);
  }
  tweet = {
    body: "Here is the body of tweet ....",
    isLiked: true,
    likesCount: 10
  }
  /* imageUrl = "http://lorempixel.com/400/200/";
  onClick() {
    console.log("button was clicked");
  } */
}
