import { Component, OnInit, Input } from '@angular/core';
import { KeisAPIService } from '../../keis-api.service';
import { TableElement } from '../../httpClient/table-element';
import { Subject } from 'rxjs';

@Component({
  selector: 'delete-rent',
  templateUrl: './delete-rent.component.html',
  styleUrls: ['./delete-rent.component.css']
})
export class DeleteRentComponent implements OnInit {
  _rent: string;
  _condition = 5;
  _rfid = '';

  _dataFlake: string;
  _deliverFlake: string;
  _isRented: number;
  _verifiedRfid = false;
  _subject: Subject<boolean>;

  @Input() set refreshTrigger(subject: Subject<boolean>) {this._subject = subject; }

  constructor(private httpClient: KeisAPIService) {
    this._dataFlake = httpClient.snowflake();
    this._deliverFlake = httpClient.snowflake();

    this.httpClient.getObserver().subscribe(item => {
      if (item.correlationId === this._dataFlake) {
       if (item.data[0].getValue('data') !== null) {
                    this._isRented = item.data[0].getValue('data')[5].value;
                    this._verifiedRfid = true;
                    this._condition = item.data[0].getValue('data')[1].value;
                    console.log(item.data[0].getValue('data'));
        } else {
          this._verifiedRfid = false;
        }

      }

      if (item.correlationId === this._deliverFlake) {

        this._subject.next();
      }
    });
   }

  ngOnInit() {
    
  }

  verifyRfid(data) {
    this.httpClient.getInstance(this._dataFlake, data);
  }

  equipmentExists() {
    console.log(this._rfid, this._verifiedRfid);
    return (this._rfid.length > 0 && this._verifiedRfid);
  }

  rented() {
    return (this._isRented > 0 && this._rfid.length > 0);
  }

  verify() {
    return (this.rented() && !this.equipmentExists);
  }

  submit() {
    if (this._verifiedRfid) {
      const element = new TableElement();
      element.setValuePair('RFID', this._rfid);
      element.setValuePair('condition', this._condition);
      this.httpClient.deliverRent(this._deliverFlake, element);
    }
  }
}
