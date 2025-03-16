import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host:{
    '(click)':'onLog()'

  }
})
export class LogDirective {
  private elementRef = inject(ElementRef);

  onLog(){
    console.log('Element clicked');
    console.log(this.elementRef.nativeElement);
  }

}
