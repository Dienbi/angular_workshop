import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighliter]'
})
export class HighliterDirective {

  constructor(private balise: ElementRef, private render: Renderer2) {}

  //  au survol 
  @HostListener('mouseenter') onMouseEnter() {
    this.render.addClass(this.balise.nativeElement, 'highlight');
  }

  // en sortantt
  @HostListener('mouseleave') onMouseLeave() {
    this.render.removeClass(this.balise.nativeElement, 'highlight');
  }
  
  //clicc
  @HostListener('click') onClick() {
    this.render.setStyle(this.balise.nativeElement, 'backgroundColor', 'black');
  }
}
