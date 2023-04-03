import { Component, OnInit } from '@angular/core';

import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-card-tv',
  templateUrl: './card-tv.component.html',
  styleUrls: ['./card-tv.component.scss']
})
export class CardTvComponent implements OnInit {

  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {
    this._demoService.saludo('CardTvComponent');
  }

}
