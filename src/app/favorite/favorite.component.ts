import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite'] // Third approach: there is problem with this approach(i.e., magic string)
})
export class FavoriteComponent implements OnInit {
  // @Input() isFavorite: boolean; // First approach: Input Properties concept(Not preffered approach)
  @Input('isFavorite') isSelected: boolean; // Second approach: Aliasing Input Properties(Preffered approach)

  // @Output() change = new EventEmitter(); // First approach: Output Properties concept(Not preffered approach)
  @Output('change') click = new EventEmitter();  // Second approach: Aliasing Output Properties(Preffered approach)

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    // this.isFavorite = !this.isFavorite; // (First approach: Not preffered approach)
    this.isSelected = !this.isSelected; // (Second approach: Preffered approach)

    // Passing Event Data
    // this.change.emit(this.isSelected); // Simple component, just passing boolean value
    this.click.emit({ newValue: this.isSelected }); // Complex component, just passing object
  }

}


export interface FavoriteComponentEventArgs {
  newValue: boolean
}
