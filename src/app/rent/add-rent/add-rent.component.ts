import { Component, OnInit, Input } from '@angular/core';
import { KeisAPIService } from '../../keis-api.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'add-rent',
    templateUrl: './add-rent.component.html',
    styleUrls: ['./add-rent.component.css']
})
export class AddRentComponent implements OnInit {
    numberFlake: string;
    rfidFlake: string;

    _rfid: string;
    _number: string;

    _verifiedRfid = false;
    _verifiedNumber = false;

    _refreshTrigger: Subject<boolean>;

    @Input() set refreshTrigger(subject: Subject<boolean>) {this._refreshTrigger = subject; }

    constructor(private httpClient: KeisAPIService) {
        this.numberFlake = httpClient.snowflake();
        this.rfidFlake = httpClient.snowflake();

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
                    this._verifiedRfid = true;
                }
            }
        });
    }


    rfidVerify(data) {
        this._verifiedRfid = false;
        this.httpClient.getInstance(this.rfidFlake, data);
    }

    numberVerify(data) {
        console.log(data);
        this._verifiedNumber = false;
        this.httpClient.userSearch(this.numberFlake, data);
    }

    submit() {
        if (this._verifiedNumber && this._verifiedRfid) {
            // Do stuff
        }
    }

    verified() {
        if (this._verifiedRfid && this._verifiedNumber) {
            return true;
        }
        return false;
    }

    ngOnInit() {
    }

}
