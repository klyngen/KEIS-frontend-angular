import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {KeisAPIService} from '../../keis-api.service';
import { Equipment } from '../../httpClient/equipment';
import { Subject } from 'rxjs';

@Component({
    selector: 'delete-all-instances',
    templateUrl: './delete-all-instances.component.html',
    styleUrls: ['./delete-all-instances.component.css']
})
export class DeleteAllInstancesComponent implements OnInit {

    reference: NgbModalRef;
    _subject: Subject<any>;
    _equipment: Equipment;

    @Input()
    set equipment(equipment: Equipment) {
        this._equipment = equipment;
    }

    @Input()
    set trigger(subject: Subject<any>) {
        this._subject = subject;
    }

    constructor(private modalService: NgbModal, private httpClient: KeisAPIService) { }

    ngOnInit() {
    }

    openModal(content) {
        this.reference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    delete() {
        if (this.reference !== undefined) {
            this.reference.close();

            if (this._equipment !== undefined) {
                this._equipment.getValue('instances').forEach(item => {
                    this.httpClient.deleteInstance('bbsh', item.value[4].value);
                });
            }
            this._subject.next();
        }
    }

}
