import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite'] // Third approach: there is problem with this approach(i.e., magic string)
})
export class FavoriteComponent implements OnInit {
  // @Input() isFavorite: boolean; // First approach: Input Properties concept(Not preffered approach)
  @Input('isFavorite') isSelected: boolean; // Second approach: Aliasing Input Properties(Preffered approach)

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // this.isFavorite = !this.isFavorite; // (First approach: Not preffered approach)
    this.isSelected = !this.isSelected; // (Second approach: Preffered approach)
  }

}
