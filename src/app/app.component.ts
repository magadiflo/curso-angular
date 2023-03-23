import { Component, OnInit, DoCheck, ViewChild, AfterViewInit } from '@angular/core';
import { MyComponent2Component } from './my-component2/my-component2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterViewInit {
  title = 'curso-angular';
  show = false;

  @ViewChild(MyComponent2Component) viewChild: MyComponent2Component | undefined;

  constructor() {
    // console.log('1° app.component -> constructor');
  }

  ngOnInit(): void {
    console.log('3° app.component -> ngOnInit');
    console.log(this.viewChild);
  }

  ngDoCheck(): void {
    console.log('4° app.component -> ngDoCheck');
    console.log(this.viewChild);
  }

  ngAfterViewInit(): void {
    console.log('4° - 3° app.component -> ngAfterViewInit');
    console.log(this.viewChild);
  }

  getMessage(value: string): void {
    console.log(value);
  }

  clickChangeTitle(): void {
    this.title = 'Título cambiado!!!';
    this.show = true;
  }
}
