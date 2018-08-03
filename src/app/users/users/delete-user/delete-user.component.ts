import { Component, OnInit, Input } from '@angular/core';
import { KeisAPIService } from '../../../keis-api.service';
import { Subject } from 'rxjs';
import { User } from '../../../httpClient/user';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
    deleteFlake: string;
    reference: NgbModalRef;
    _subject: Subject<boolean>;
    _data: User;

    @Input() set refreshTrigger(sub: Subject<boolean>) { this._subject = sub; }

    @Input() set data(data: User) { this._data = data; }

    constructor(private httpClient: KeisAPIService, private modalService: NgbModal) {
        this.deleteFlake = httpClient.snowflake();

        httpClient.getObserver().subscribe(item => {
            if (item.correlationId === this.deleteFlake) {
                console.log('Delete response');
                this.notify();
            }
        });
    }

    notify() {
        if (this._subject !== undefined) {
            this._subject.next();
        }
    }

  ngOnInit() {

  }

    openModal(content) {
        this.reference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    delete() {
        if (this._data === undefined) {
            return;
        }

        if (this.reference !== undefined) {
            this.reference.close();
        }

        this.httpClient.deleteUser(this.deleteFlake, this._data.getValue('id'));
    }

}
