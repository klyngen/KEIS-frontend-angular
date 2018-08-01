import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'equipment-status',
  templateUrl: './equipment-status.component.html',
  styleUrls: ['./equipment-status.component.css']
})
export class EquipmentStatusComponent implements OnInit {

    _data = [];

  constructor() { }

    @Input()
    set data(data) {
        this._data = data;
    }

  ngOnInit() {
  }

}
