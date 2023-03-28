import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyComponent1Component } from './my-component1/my-component1.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { MyComponent3Component } from './my-component3/my-component3.component';
import { MyComponent4Component } from './my-component4/my-component4.component';
import { HerosComponent } from './heros/heros.component';
import { HerosDirectiveStructComponent } from './heros-directive-struct/heros-directive-struct.component';

import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';

@NgModule({
  declarations: [
    MyComponent1Component,
    MyComponent2Component,
    MyComponent3Component,
    MyComponent4Component,
    HerosComponent,
    HerosDirectiveStructComponent,
    CustomCurrencyPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MyComponent1Component,
    MyComponent2Component,
    HerosComponent,
    HerosDirectiveStructComponent,
  ]
})
export class MyComponentsModule { }
