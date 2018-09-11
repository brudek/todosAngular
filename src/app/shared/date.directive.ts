import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date;
  private paragraph;
  private eventX;
  private eventY;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }

  @HostListener('mouseenter', ['$event'])
  mouseEnter(eventDate: MouseEvent) {
    this.renderer.addClass(this.el.nativeElement, 'active');
    this.paragraph.innerHTML = this.date.toLocaleString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseLeave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }

  // test click event for tooltip location
  @HostListener('click', ['$event'])
  mouseClick(eventDate: MouseEvent) {
    this.eventX = eventDate.clientX;
    this.eventY = eventDate.clientY;

    console.log(this.eventX + ' ' + this.eventY);
  }

}
