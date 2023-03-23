import { Component, OnInit, DoCheck, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MyComponent2Component } from './components/my-component2/my-component2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  title = 'curso-angular';
  show = true;

  @ViewChild(MyComponent2Component) viewChild: MyComponent2Component | undefined;

  constructor() {
    // console.log('1° app.component -> constructor');
  }

  ngOnInit(): void {
    // console.log('3° app.component -> ngOnInit');
    // console.log(this.viewChild);
  }

  ngDoCheck(): void {
    // console.log('4° app.component -> ngDoCheck');
    // console.log(this.viewChild);
  }

  ngAfterViewInit(): void {
    //* Asegura que ya se renderizó la template
    // console.log('4° - 3° app.component -> ngAfterViewInit');
    // console.log(this.viewChild);
  }

  ngAfterViewChecked(): void {
    //* Verifica que si la plantilla renderizada sufre algún cambio
    // console.log('4° - 4° app.component -> ngAfterViewChecked');
    // console.log(this.viewChild);
  }

  getMessage(value: string): void {
    console.log(value);
  }

  clickChangeTitle(): void {
    // this.title = 'Título cambiado!!!';
    this.show = false;
  }
}
