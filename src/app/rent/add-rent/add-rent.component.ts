import { Component, OnInit, Input } from '@angular/core';
import { KeisAPIService } from '../../keis-api.service';
import { Subject } from 'rxjs';
import { TableElement } from '../../httpClient/table-element';

@Component({
    selector: 'add-rent',
    templateUrl: './add-rent.component.html',
    styleUrls: ['./add-rent.component.css']
})
export class AddRentComponent implements OnInit {
    numberFlake: string;
    rfidFlake: string;
    rentFlake: string;

    _rfid: string;
    _number: string;

    _verifiedRfid = false;
    _verifiedNumber = false;

    _isRented = false;

    
    _instanceId: string;

    _refreshTrigger: Subject<boolean>;

    @Input() set refreshTrigger(subject: Subject<boolean>) {this._refreshTrigger = subject; }

    constructor(private httpClient: KeisAPIService) {
        this.numberFlake = httpClient.snowflake();
        this.rfidFlake = httpClient.snowflake();
        this.rentFlake = httpClient.snowflake();

        httpClient.getObserver().subscribe(item => {
            if (item.correlationId === this.numberFlake) {
                item.data.forEach(sitem => {
                    if (sitem.getValue('studentNumber') === this._number) {
                        this._verifiedNumber = true;
                        return;
                    }
                });
            }

            if (item.correlationId === this.rfidFlake) {
                if (item.data[0].getValue('data') !== null) {
                    this._isRented = item.data[0].getValue('data')[5].value;
                    this._verifiedRfid = true;
                    this._instanceId = item.data[0].getValue('data')[0].value;
                }
            }

            if (item.correlationId === this.rentFlake) {
                if (this._refreshTrigger !== undefined) {
                    this._refreshTrigger.next();
                }
            }
        });
    }


    rfidVerify(data) {
        this._verifiedRfid = false;
        this.httpClient.getInstance(this.rfidFlake, data);
    }

    numberVerify(data) {
        this._verifiedNumber = false;
        this.httpClient.userSearch(this.numberFlake, data);
    }

    submit() {
        console.log(typeof this._verifiedRfid, typeof this._verifiedNumber, typeof this._instanceId, typeof this._rfid);
        if (this._verifiedNumber && this._verifiedRfid) {
            // Do stuff
            if (this._rfid === undefined || this._instanceId === undefined) {
                return; // break
            }

            const element = new TableElement();
            element.setValuePair('instance', this._instanceId);
            element.setValuePair('studentNumber', this._number);

            this.httpClient.createRent(this.rentFlake, element);

        }
    }

    verified() {
        if (this._verifiedRfid && this._verifiedNumber && !this._isRented) {
            return true;
        }
        return false;
    }

    ngOnInit() {
    }

}
