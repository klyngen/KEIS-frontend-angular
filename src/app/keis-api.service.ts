import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Equipment } from './httpClient/equipment';
import { AlertServiceService } from './alert-service.service';
import {map} from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Alert } from './Models/alert';
import { JsonElement } from './httpClient/json-element';
import { Utils } from './httpClient/utils';
import { TableElement } from './httpClient/table-element';

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

    /**
       * Returns true if there is an error present
       *
       */
    private handleServerErrors(data: Object): boolean {
        if (data['error'] !== undefined) {
            this.alertService.addAlert(
                new Alert('danger', 'server side error', data['error']));
            return true;
        }
        return false;
    }


    getAllEquipment(snowflake: string) {
        this.httpClient.get(baseUrl + '/equipment').pipe(map(item => {
            if (!this.handleServerErrors(item)) {
                return <Equipment[]> Utils.object2Equipment(item['data']);
            }
            return null;
        })).subscribe(data => {
            if (data !== null) {
                this.notifySubjects(data, snowflake);
            }
        }, error => {
            this.alertService.addAlert(
                new Alert('warning',
                          'unable to fetch equipment',
                          'might be cauced by bad configuration '
                          + error));
        });
    }

/**
 *  Post data to an API. This function is private while this is the raw implementation
 */
    private postData(snowflake: string, uri: string, data) {
        this.httpClient.post(baseUrl + uri, data).pipe(map(item => {
            if (!this.handleServerErrors(item)) {
               // Make a happy alert?
                return Utils.object2TableElement(item);
            }
            return null;
        })).subscribe(success => {
            this.notifySubjects(success, snowflake);
        }, error => {
            console.log(error);
            this.alertService.addAlert(
                new Alert('danger',
                          'unable to post data to ' + baseUrl + uri,
                          'the keis backend might not be running \n Backend reply: '
                          + error.message + '\n KEIS-reply: ' + error.error['error']));
        });
    }

    addEquipment(snowflake: string, data: Equipment) {
        this.postData(snowflake, '/equipment', data.createObject());
    }


    getBrandsAndTypes(snowflake: string, uri: string) {
        this.httpClient.get(baseUrl + uri).subscribe(data => {
            if (!this.handleServerErrors(data)) {
                const elements: string[] = [];
                if (Array.isArray(data['data'])) {
                    data['data'].forEach(item => {
                        elements.push(item['name']);
                    });

                    this.notifySubjects(elements, snowflake);
                }
            }
        }, error => {
            this.alertService.addAlert(
                new Alert('warning',
                          'unable to fetch brand data',
                          'this is a client side implementation issue'));
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
