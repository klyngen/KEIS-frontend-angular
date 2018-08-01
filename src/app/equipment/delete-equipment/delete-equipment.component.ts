import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'delete-equipment',
  templateUrl: './delete-equipment.component.html',
  styleUrls: ['./delete-equipment.component.css']
})
export class DeleteEquipmentComponent implements OnInit {

    subject: Subject<any>;
    reference: NgbModalRef;

    @Input()
    set refresh(subject: Subject<any>) {
        this.subject = subject;
    }

    @Output() clicked = new EventEmitter<any>();

    constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

    openModal(content) {
        this.reference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    delete() {
        if (this.reference !== undefined) {
            this.reference.close();
        }
        this.clicked.emit('du måsta flytta på deg');
    }


}
