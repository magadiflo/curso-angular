import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  title = 'Hello World!';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Hola mundo en español!';
    }, 1500);
  }

}
