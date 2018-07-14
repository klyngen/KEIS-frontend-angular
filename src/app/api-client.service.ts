import {Equipment} from './httpClient/equipment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs';
import { AlertServiceService } from './alert-service.service';
import { Alert } from './Models/alert';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ApiClientService {
    // All listeners
    subject: Subject<any> = new Subject<any>();

    // TODO put this in some configuration file
    baseUrl = 'http://localhost:8000/api';

    constructor(private httpClient: HttpClient, private alertService: AlertServiceService) {

    }

    getObserver() {
        return this.subject.asObservable();
    }

    /**
     *  Notifies all the subscribers
     */
    notifySubjects(data: any, correlationId: string) {
        this.subject.forEach(item => {
            item.next(data);
        });
    }

    getAllEquipment() {
        const snowflake = this.snowflake();
        this.httpClient.get(this.baseUrl + '/equipment').subscribe(data => {
            this.notifySubjects(data, snowflake);
        }, error => {
            this.alertService.addAlert(new Alert('warning', 'unable to fetch equipment', 'might be cauced by bad configuration ' + error.error.message));
        });
        return snowflake;
    }

    snowflake(): string {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 15; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
