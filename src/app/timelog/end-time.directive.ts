import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[endTime]'
})
export class EndTimeDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
