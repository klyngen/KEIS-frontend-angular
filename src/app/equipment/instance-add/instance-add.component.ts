import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KeisAPIService } from '../../keis-api.service';
import { TableElement } from '../../httpClient/table-element';

@Component({
  selector: 'instance-add',
  templateUrl: './instance-add.component.html',
  styleUrls: ['./instance-add.component.css']
})
export class InstanceAddComponent implements OnInit {
    @Output() submit = new EventEmitter<TableElement>();

    _condition = 5;
    _date: string;
    _rfid: string;
    rfidValid = true;

    rfidFlake: string;
    constructor(private httpClient: KeisAPIService) {
        this.rfidFlake = httpClient.snowflake();

        httpClient.getObserver().subscribe(data => {
            if (data.correlationId === this.rfidFlake) {
                if (data.data) {
                    this.rfidValid = true;
                    return;
                }
                this.rfidValid = false;
            }
        });
    }

  ngOnInit() {
  }

    validateRFID(data) {
        this.httpClient.verifyRFID(this.rfidFlake, data.model);
    }

    verified() {
        if (this.rfidValid && this._date !== undefined && this._rfid !== undefined) {
            console.log("verified");
            return true;
        }
        return false;
    }

    submission() {
        if (this.verified()) {
            const tableElement = new TableElement();
            tableElement.setValuePair('RFID', this._rfid);
            tableElement.setValuePair('purchasetime', this._date);
            tableElement.setValuePair('condition', this._condition);
            this.submit.emit(tableElement);
        }
    }

}
