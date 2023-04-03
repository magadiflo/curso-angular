import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyComponentsModule } from './components/my-components.module';
import { CardTvModule } from './card-tv/card-tv.module';

//* Cambiar el locale de la app
import localeEsPe from "@angular/common/locales/es-PE";
import { registerLocaleData } from "@angular/common";

//* Es obligatorio a partir de Angular 11
registerLocaleData(localeEsPe);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyComponentsModule,
    CardTvModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
