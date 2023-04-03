import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsTvComponent } from './components/options-tv.component';
import { TotalModule } from '../total/total.module';



@NgModule({
  declarations: [
    OptionsTvComponent,
  ],
  exports: [
    OptionsTvComponent,
  ],
  imports: [
    CommonModule,
    TotalModule,
  ]
})
export class OptionsTvModule { }
