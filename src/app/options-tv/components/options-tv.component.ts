import { Component, OnInit } from '@angular/core';

import { ColorsTv, ResolutionsTv, SizesTv } from 'src/app/common/models/tv-type.interface';
import { ITv } from 'src/app/common/models/tv.interface';
import { CalculateService } from '../../common/services/calculate.service';


@Component({
  selector: 'app-options-tv',
  templateUrl: './options-tv.component.html',
  styleUrls: ['./options-tv.component.scss'],
  providers: [CalculateService]
})
export class OptionsTvComponent implements OnInit {

  colorTv: string = '#FFFFFF';
  colors: ColorsTv[] = ['#f44336', '#e91e63', '#9c27b0'];
  sizes: SizesTv[] = ['10 pulgadas', '19 pulgadas', '24 pulgadas', '32 pulgadas', '40 pulgadas'];
  resolutions: ResolutionsTv[] = ['4K ULTRA HD', 'HD', 'FULL HD', '8K'];
  optionsTv: ITv = <ITv>{};

  constructor(private _calculateService: CalculateService) { }

  ngOnInit(): void {
  }

  selectColor(color: ColorsTv): void {
    this.optionsTv.color = color;
    this.colorTv = color;
    this.sendOptionTv();

  }

  changeTamanio() {
    this.sendOptionTv();
  }

  changeResolution() {
    this.sendOptionTv();
  }

  changeRack() {
    this.sendOptionTv();
  }

  private sendOptionTv() {
    this._calculateService.setOptionsTv(this.optionsTv);
  }

}
