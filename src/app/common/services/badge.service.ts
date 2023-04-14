import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BadgeService {

    private subject = new BehaviorSubject<boolean>(false);
    chanelBadge = this.subject.asObservable();

    addTv(): void {
        this.subject.next(true);
    }

}
