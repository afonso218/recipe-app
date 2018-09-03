import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropbownDirective {

  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef, private render: Renderer2) {
  }

  @HostListener('click') onMouseClick() {

    this.isOpen = !this.isOpen;

    /*
    if (this.isOpen) {
      this.render.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.render.removeClass(this.elementRef.nativeElement, 'open');
    }
    */

  }

}
