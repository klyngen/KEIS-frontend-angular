import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Equipment } from '../../httpClient/equipment';

@Component({
  selector: 'delete-equipment',
  templateUrl: './delete-equipment.component.html',
  styleUrls: ['./delete-equipment.component.css']
})
export class DeleteEquipmentComponent implements OnInit {

    subject: Subject<any>;
    reference: NgbModalRef;
    _equipment: Equipment;
    _deletable: boolean;

    @Input()
    set refresh(subject: Subject<any>) {
        this.subject = subject;
    }

    @Output() clicked = new EventEmitter<any>();

    @Input()
    set equipment(equipment: Equipment) {
        this._equipment = equipment;
    }

    constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

    openModal(content) {
        this.reference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    delete() {
        console.log('delete pressed', this._deletable);
        if (this.reference !== undefined) {
            this.reference.close();
        }

        if (this._deletable) {
            console.log('ordering delete');
            this.clicked.emit('du måsta flytta på deg');
        }
    }

    canDelete() {
        if (this._equipment !== undefined) {
            const arr = this._equipment.getValue('instances');
            if (arr.length !== 0) {
                this._deletable = false;
                return true;
            }
            this._deletable = true;
            return false;
        }
        this._deletable = false;
        return true;
    }
}
