import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResponsivePlaceholder]'
})
export class ResponsivePlaceholderDirective {
  @Input() mobilePlaceholder: string = '';
  @Input() tabletPlaceholder: string = '';
  @Input() desktopPlaceholder: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updatePlaceholder();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updatePlaceholder();
  }

  private updatePlaceholder() {
    const width = window.innerWidth;
    if (width < 768) {
      this.el.nativeElement.placeholder = this.mobilePlaceholder;
    } else if (width >= 768 && width < 1024) {
      this.el.nativeElement.placeholder = this.tabletPlaceholder;
    } else {
      this.el.nativeElement.placeholder = this.desktopPlaceholder;
    }
  }
}
