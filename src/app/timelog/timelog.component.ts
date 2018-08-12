import { i1} from '@angular/core/src/render3';
import { Component, OnInit, ViewChild, TemplateRef, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { KeisAPIService } from '../keis-api.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EndTimeDirective } from './end-time.directive';

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

              // Close the modal
              this.reference.close();
            }, 1000);

          } else if (item.data[0].getValue('success') === 'false') {
            // Already checked in
            this._alreadyChecked = true;

          }
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

  ngAfterViewInit() {
    this.queryList.map(timeLogger => 
      timeLogger.viewContainerRef.createEmbeddedView(this.timeTemplateRef));
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
