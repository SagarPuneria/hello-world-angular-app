import { Component } from '@angular/core';

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

  /* imageUrl = "http://lorempixel.com/400/200/";
  onClick() {
    console.log("button was clicked");
  }
  onFavoriteChange() {
    console.log("onFavoriteChange.............");
  } */
}
