import { Component, OnInit, Input } from '@angular/core';
import { ITableElement } from '../itable-element';
import { Subject } from 'rxjs';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
    _data: Object[] = [];
    _header: string[] = [];

  dtTrigger: Subject<any> = new Subject();


    @Input()
  set data(data: ITableElement[]) {
        this._data = data;
      if (data.length > 0) {
        this._header = data[0].createHeader();
      }
    console.log(this._header);
    this.dtTrigger.next();
    }


  constructor() { }

  ngOnInit() {
  }
}
