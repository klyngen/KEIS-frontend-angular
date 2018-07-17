import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipment } from './httpClient/equipment';
import { AlertServiceService } from './alert-service.service';
import {map} from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Alert } from './Models/alert';
import { JsonElement } from './httpClient/json-element';

const baseUrl = 'http://localhost:8000/api';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})

export class KeisAPIService {
    subject: Subject<any> = new Subject<any>();

    constructor(private httpClient: HttpClient, private alertService: AlertServiceService) {

    }


    // Combines the baseUrl with an uri
    // Makes sure there a correct slash
    private makeUrl(uri: string): string {
        const url = baseUrl;

        if (!url.endsWith('/')) {
            url.concat('/');
        }

        return url.concat(uri);
    }

    getObserver() {
        return this.subject.asObservable();
    }

    /**
     *  Notifies all the subscribers
     */
    notifySubjects(data: any, correlationId: string) {
        this.subject.next({data, correlationId});
    }



    getAllEquipment(snowflake: string) {
      this.httpClient.get(baseUrl + '/equipment').pipe(map(item => JsonElement.object2Equipment(item))).subscribe(data => {
            this.notifySubjects(data, snowflake);
        }, error => {
          console.log(error);
            this.alertService.addAlert(new Alert('warning', 'unable to fetch equipment', 'might be cauced by bad configuration ' + error.message));
        });
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
