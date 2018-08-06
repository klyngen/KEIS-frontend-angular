import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Rent } from '../httpClient/rent';
import { KeisAPIService } from '../keis-api.service';

@Component({
    selector: 'rent',
    templateUrl: './rent.component.html',
    styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

    _dataSubject: Subject<Rent[]> = new Subject();
    rentFlake: string;
    loaded = true;
    _refreshTrigger: Subject<boolean> = new Subject();

    constructor(private httpClient: KeisAPIService) {
        this.rentFlake = httpClient.snowflake();

        httpClient.getObserver().subscribe(item => {
            if (item.correlationId === this.rentFlake) {

                console.log(item.data);
                if (item.data) {
                    this._dataSubject.next(item.data);
                }
            }
        });

        this._refreshTrigger.asObservable().subscribe(item => {
            httpClient.getAllRent(this.rentFlake);
            console.log("yay");
        });
    }

    ngOnInit() {
        this.httpClient.getAllRent(this.rentFlake);
    }

    clicked(event) {
        console.log(event);
    }

}
