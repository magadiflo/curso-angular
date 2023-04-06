import { Component, OnInit } from '@angular/core';

export type ColorsTv = '#f44336' | '#e91e63' | '#9c27b0';
export type SizesTv = '10 pulgadas' | '19 pulgadas' | '24 pulgadas' | '32 pulgadas' | '40 pulgadas';
export type ResolutionsTv = '4K ULTRA HD' | 'HD' | 'FULL HD' | '8K';
export interface ITv {
  color: ColorsTv;
  rack: boolean;
  tamanio: SizesTv;
  resolution: ResolutionsTv;
}

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
