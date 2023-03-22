import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  title = 'curso-angular';

  constructor() {
    console.log('1° app.component -> constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2° app.component -> ngOnChanges');
  }

  getMessage(value: string): void {
    console.log(value);
  }

  clickChangeTitle(): void {
    this.title = 'Título cambiado!!!';
  }
}
