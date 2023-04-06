import { Component, OnInit } from '@angular/core';

import { ColorsTv, ResolutionsTv, SizesTv } from 'src/app/common/models/tv-type.interface';
import { ITv } from 'src/app/common/models/tv.interface';

@Component({
  selector: 'app-options-tv',
  templateUrl: './options-tv.component.html',
  styleUrls: ['./options-tv.component.scss'],
})
export class OptionsTvComponent implements OnInit {

  colors: ColorsTv[] = ['#f44336', '#e91e63', '#9c27b0'];
  sizes: SizesTv[] = ['10 pulgadas', '19 pulgadas', '24 pulgadas', '32 pulgadas', '40 pulgadas'];
  resolutions: ResolutionsTv[] = ['4K ULTRA HD', 'HD', 'FULL HD', '8K'];
  optionsTv: ITv = <ITv>{};

  constructor() { }

  ngOnInit(): void {

  }

  selectColor(color: ColorsTv): void {
    this.optionsTv.color = color;
  }

}
