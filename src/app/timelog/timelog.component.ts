import { i1} from '@angular/core/src/render3';
import { Component, OnInit, ViewChild, TemplateRef, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { KeisAPIService } from '../keis-api.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EndTimeDirective } from './end-time.directive';
import { TableElement } from '../httpClient/table-element';

@Component({
  selector: 'timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.css']
})
export class TimelogComponent implements OnInit, AfterViewInit {

  @ViewChild('timePlate')
  private timeTemplateRef: TemplateRef<any>;

  @ViewChildren(EndTimeDirective)
  private queryList: QueryList<EndTimeDirective>;

  confirmFlake: string;
  updateFlake: string;
  createFlake: string;
  reference: NgbModalRef;
  _rfid: string;
  _checkedIn = false;
  _alreadyChecked = false;
  _overClock = false;
  _date: string = null;

  waiting = false;

  constructor(private httpClient: KeisAPIService, private modalService: NgbModal) {
    this.confirmFlake = httpClient.snowflake();
    this.updateFlake = httpClient.snowflake();
    this.createFlake = httpClient.snowflake();

    httpClient.getObserver().subscribe(item => {
      switch (item.correlationId) {
        case this.createFlake:
          if (item.data[0].getValue('success') === 'true') {
            // The check in was successfull
            this._checkedIn = true;
            setTimeout(() => {
              // Reset the status
              this._checkedIn = false;
              this._alreadyChecked = false;

              // Close the modal
              this.reference.close();
              this._rfid = '';
            }, 1000);

          } else if (item.data[0].getValue('success') === 'false') {
            // Already checked in
            this._alreadyChecked = true;
            this._overClock = true;
          }
        break;

        case this.confirmFlake:

          console.log(item.data);
        break;

        case this.updateFlake:
          console.log(item.data);
          const error = item.data.error;

          if (error !== null) {
            if (error === "false") {
              this._overClock = true;
              return;
            } else {
            }
          } else {
            this._overClock = false;
            this.reference.close();
            this._rfid = '';
            this._date = null;
          }
            this._rfid = '';
            this.reference.close();
        break;
        
        default:

          console.log(item.data);
        break;
      }
    });
   }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.queryList.map(timeLogger =>
      timeLogger.viewContainerRef.createEmbeddedView(this.timeTemplateRef));
  }

  checkIn() {

  }

  postWithTime() {

      this._overClock = false;
      this.waiting = false;

      const element = new TableElement();
      element.setValuePair('stop', this._date);
      console.log(this._date);
      element.setValuePair('rfid', this._rfid);
      this.httpClient.updateLogEntry(this.updateFlake, element);
  }

  waitAndCheckOut() {
    this.waiting = true;
    setTimeout(() => {
      console.log('checkout function runned');
      const element = new TableElement();
      element.setValuePair('rfid', this._rfid);
      this.httpClient.updateLogEntry(this.updateFlake, element);
      this.waiting = false;
   }, 1000);
  }

  press() {
  }

  private funcyFunc() {

  }

  waitAndCheckIn() {
    this.waiting = true;
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

  closedModal() {
    this._rfid = '';
    this._date = null;
  }

}
