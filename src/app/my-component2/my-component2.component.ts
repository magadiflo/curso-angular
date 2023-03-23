import { Component, OnInit, DoCheck, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.scss']
})
export class MyComponent2Component implements OnInit, DoCheck, AfterContentInit {

  @ContentChild('childComponent2') contentChild: HTMLElement | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('3° my-component2.component -> ngOnInit');
    console.log(this.contentChild);
    
  }

  ngDoCheck(): void {
    console.log('4° my-component2.component -> ngDoCheck');
    console.log(this.contentChild);
  }

  ngAfterContentInit(): void {
    console.log('4° - 1° my-component2.component -> ngAfterContentInit');
    console.log(this.contentChild);
  }
}