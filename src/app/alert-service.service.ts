import { Injectable } from '@angular/core';
import { Alert } from './Models/alert';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceService {

    // Observer pattern implementation
    private subject: Subject<Alert> = new Subject<Alert>();

    constructor() { }

    getObserver() {
        return this.subject.asObservable();
    }

    clear() {
        this.subject.next();
    }

    public addAlert(alert: Alert) {
        this.subject.next(<Alert>alert);
    }
}
