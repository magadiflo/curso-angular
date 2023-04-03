import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardTvComponent } from './components/card-tv.component';

import { OptionsTvModule } from '../options-tv/options-tv.module';
import { DemoService } from '../services/demo.service';



@NgModule({
  declarations: [
    CardTvComponent
  ],
  exports: [
    CardTvComponent,
  ],
  imports: [
    CommonModule,
    OptionsTvModule,
  ],
  providers: [DemoService]
})
export class CardTvModule { }
