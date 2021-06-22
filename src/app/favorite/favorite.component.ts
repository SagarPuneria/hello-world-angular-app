import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite'] // there is problem with this approach(i.e., magic string)
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean; // Aliasing Input Properties

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }

}
