import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  // @Input('format') format: string;

  // if you have only one input properties(i.e.,format), 
  // you can use selector(i.e.,appInputFormat) of that directive as an alias of that input property 
  // and this simplifies the usages of your custom directive.
  @Input('appInputFormat') format: string;

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log("on Focus");
  }

  @HostListener('blur') onBlur() {
    console.log("on Blur");
    let value: string = this.el.nativeElement.value;

    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
/*
$ ng g d input-format
CREATE src/app/input-format.directive.spec.ts (245 bytes)
CREATE src/app/input-format.directive.ts (151 bytes)
UPDATE src/app/app.module.ts (484 bytes)
*/