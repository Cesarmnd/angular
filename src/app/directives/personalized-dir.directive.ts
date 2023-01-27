import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPersonalizedDir]'
})
export class PersonalizedDirDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { 
    renderer.setStyle(elementRef.nativeElement, 'background-color', 'gray')
   }

}
