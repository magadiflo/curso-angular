import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'curso-angular';

  constructor() {
    console.log('1° app.component -> constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //* Como este componente no tiene ninguna variable anotada con @Input es que no se ejecuta este método
    console.log('2° app.component -> ngOnChanges');
  }

  ngOnInit(): void {
    console.log('3° app.component -> ngOnInit');
  }

  getMessage(value: string): void {
    console.log(value);
  }

  clickChangeTitle(): void {
    this.title = 'Título cambiado!!!';
  }
}
