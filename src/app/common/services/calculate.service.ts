import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ITv } from '../models/tv.interface';

@Injectable()
export class CalculateService {

    private subject = new BehaviorSubject<number>(0);
    chanelCalculate = this.subject.asObservable();

    setOptionsTv(tvOptions: ITv): void {
        const price = this.calculatePrice(tvOptions);
        this.subject.next(price);
    }

    // getPrice(): number {
    //     return this.subject.getValue();
    // }

    calculatePrice(tvOptions: ITv): number {
        let price = 0;
        if (tvOptions.color == '#9c27b0') {
            price += 50;
        }

        if (tvOptions.resolution == '4K ULTRA HD') {
            price += 200;
        }

        if (tvOptions.tamanio == '10 pulgadas') {
            price += 20;
        }

        if (tvOptions.rack) {
            price += 40;
        }
        return price;
    }

}
