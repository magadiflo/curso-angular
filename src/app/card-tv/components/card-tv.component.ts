import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tv',
  templateUrl: './card-tv.component.html',
  styleUrls: ['./card-tv.component.scss']
})
export class CardTvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveTv(): void {
    console.log('Guardando...');
  }

}
