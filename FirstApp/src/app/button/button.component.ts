import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
private title ="click me!";
  constructor() { }

  ngOnInit() {
  }
  mouseEnter() {
this.title = 'click!';
  }
  mouseLeave() {
this.title = 'click me!';
  }


}
