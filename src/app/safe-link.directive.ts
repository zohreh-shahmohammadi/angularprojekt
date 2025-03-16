import { Directive, ElementRef, inject, input, Input } from '@angular/core';
import { LogDirective } from './log.directive';
@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host:{
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
   queryParam = input('myapp',{alias:'appSafeLink'});
   private hostElemntRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective is active!');
  }
  onConfirmLeavePage(event:MouseEvent){
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if(wantsToLeave){
        const address = this.hostElemntRef.nativeElement.href;
        (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
      return;
  }
  event.preventDefault();
}
}
