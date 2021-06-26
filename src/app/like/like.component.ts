import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('isActive') isSelected: boolean; // Aliasing Input Properties(Preffered approach)
  @Input('likes-count') likesCount: number; // Aliasing Input Properties(Preffered approach)

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.likesCount += (this.isSelected) ? -1 : 1;
    this.isSelected = !this.isSelected;
  }
}
