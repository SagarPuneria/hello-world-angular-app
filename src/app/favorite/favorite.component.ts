import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
/*
hello-world-angular-app sagar.puneria$ ng g c favorite
// import font-awesome Style Sheets into src/styles.css file
hello-world-angular-app sagar.puneria$ ng serve
*/