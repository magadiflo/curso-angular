import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyComponent1Component } from './my-component1/my-component1.component';
import { MyComponent2Component } from './my-component2/my-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent1Component,
    MyComponent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
