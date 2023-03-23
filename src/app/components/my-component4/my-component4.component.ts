import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component4',
  templateUrl: './my-component4.component.html',
  styleUrls: ['./my-component4.component.scss']
})
export class MyComponent4Component implements OnInit {

  @Input() titulo: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
