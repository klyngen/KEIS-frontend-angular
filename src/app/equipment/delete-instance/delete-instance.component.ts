import { Component, OnInit, Input } from '@angular/core';
import {KeisAPIService} from '../../keis-api.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'delete-instance',
    templateUrl: './delete-instance.component.html',
    styleUrls: ['./delete-instance.component.css']
})
export class DeleteInstanceComponent implements OnInit {

    _rfid: string;
    verifiedRFID = false;
    verificationFlake: string;
    deleteFlake: string;

    subject: Subject<boolean>;

    @Input()
    set trigger(subject: Subject<boolean>) {
        this.subject = subject;
    }


    constructor(private httpClient: KeisAPIService) {
        this.verificationFlake = httpClient.snowflake();
    }

    ngOnInit() {
        this.httpClient.getObserver().subscribe(item => {
            if (item.correlationId === this.verificationFlake) {
                this.verifiedRFID = !item.data;
            } else if (item.correlationId === this.deleteFlake) {
                this._rfid = '';
                this.verifiedRFID = true;

                if (this.subject !== undefined) {
                    this.subject.next();
                }
            }
        });
    }

    verify(data) {
        if (data.valid) {
            this.httpClient.verifyRFID(this.verificationFlake, data.model);
        }
    }

    delete() {
        if (this._rfid.length > 0) {
            this.httpClient.deleteInstance(this.deleteFlake, this._rfid);
        }
    }
}
