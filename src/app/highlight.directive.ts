import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="rgb(26, 158, 114)"
   }
}
