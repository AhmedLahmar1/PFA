import {Directive, ElementRef, HostListener} from '@angular/core';
import {createHostListener} from '@angular/compiler/src/core';
import {hostReportError} from 'rxjs/internal-compatibility';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor( private  element: ElementRef) {
    element.nativeElement.innerText = 'click me from directory';
  }
  @HostListener ('mouseenter')
  public mouseenter(){
    this.element.nativeElement.innerText = 'click from directive';
  }
  @HostListener('mouseleave')
  public mouseleave(){
    this.element.nativeElement.innerText = 'click mee from directive';
  }
}
