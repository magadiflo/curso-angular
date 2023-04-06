import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    TotalModule,
  ]
})
export class OptionsTvModule { }
