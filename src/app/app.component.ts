import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'curso-angular';

  constructor() {
    console.log('1° app.component -> constructor');
  }

  ngOnInit(): void {
    console.log('3° app.component -> ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4° app.component -> ngDoCheck');
  }

  getMessage(value: string): void {
    console.log(value);
  }

  clickChangeTitle(): void {
    this.title = 'Título cambiado!!!';
  }
}
