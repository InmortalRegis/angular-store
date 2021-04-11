import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() backgroundColor: string;
  @Input() color: string;
  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.backgroundColor
    );
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }
}
