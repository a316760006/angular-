import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChanger]'
})
export class ChangerDirective {
  constructor(public el: ElementRef) {
    this.el.nativeElement.style.color = "#0d5183"
    this.el.nativeElement.style.paddingLeft = "30px"
    this.el.nativeElement.style.fontWeight = "bold"
    this.el.nativeElement.style.fontSize = "20px"
  }
}
