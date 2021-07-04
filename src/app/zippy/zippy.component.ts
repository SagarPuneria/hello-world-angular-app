import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input('title') title: string;
  isExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
/*
$ ng g c zippy
CREATE src/app/zippy/zippy.component.css (0 bytes)
CREATE src/app/zippy/zippy.component.html (20 bytes)
CREATE src/app/zippy/zippy.component.spec.ts (621 bytes)
CREATE src/app/zippy/zippy.component.ts (265 bytes)
UPDATE src/app/app.module.ts (562 bytes)
*/