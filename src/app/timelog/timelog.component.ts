import { i1 } from '@angular/core/src/render3';
import { Component, OnInit } from '@angular/core';
import { KeisAPIService } from '../keis-api.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.css']
})
export class TimelogComponent implements OnInit {

  confirmFlake: string;
  updateFlake: string;
  createFlake: string;
  reference: NgbModalRef;
  _rfid: string;

  waiting = false;

  constructor(private httpClient: KeisAPIService, private modalService: NgbModal) {
    this.confirmFlake = httpClient.snowflake();
    this.updateFlake = httpClient.snowflake();
    this.createFlake = httpClient.snowflake();

    httpClient.getObserver().subscribe(item => {
      switch (item.correlationId) {
        case this.createFlake:

          console.log(item.data);
        break;

        case this.confirmFlake:

          console.log(item.data);
        break;

        case this.updateFlake:
          console.log(item.data);
        break;
        
        default:

          console.log(item.data);
        break;
      }
    });
   }

  ngOnInit() {
  }

  checkIn() {

  }


  waitAndCheckOut() {
    this.waiting = true;
    setTimeout(function () {
      this.httpClient.updateLogEntry(this.updateFlake, this._rfid);
      this.waiting = false;
   }, 1000);
  }

  press() {
    console.log("sdfdsf");
  }

  private funcyFunc() {

  }

  waitAndCheckIn() {
    setTimeout(() => {
      this.httpClient.createLogEntry(this.createFlake, this._rfid);
      this.waiting = false;
   }, 1000);
  }


  checkInPress() {
    if (!this.waiting) {
      this.waitAndCheckIn();
    }
  }

  checkOutPress() {
    if (!this.waiting) {
      this.waitAndCheckOut();
    }
  }

    openModal(content, innput) {
        this.reference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
        $(innput).focus();
    }

  verifyRFID(data) {
    this.httpClient.getLogEntry(this.confirmFlake, this._rfid);
  }

}
