import { formatCurrency, getLocaleCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  currencyCode = 'PEN';
  locale = 'es-PE';

  transform(value: number, digitsInfo: string): string | null {
    return formatCurrency(value, this.locale, getLocaleCurrencySymbol(this.locale)!, this.currencyCode, digitsInfo);
  }

}