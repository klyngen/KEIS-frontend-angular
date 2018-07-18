import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITableElement } from '../itable-element';
import { Subject } from 'rxjs';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
    _data: ITableElement[] = [];
    _header: string[] = [];

  dtTrigger: Subject<any> = new Subject();
    dtOptions: DataTables.Settings = {};


    @Input()
  set data(data: ITableElement[]) {
        this._data = data;
      if (data.length > 0) {
        this._header = data[0].createHeader();
      }
    this.dtTrigger.next();
    }

    @Output() clicked = new EventEmitter<ITableElement>();


  constructor() { }

  ngOnInit() {
      this.dtOptions = {
          rowCallback: (row: Node, data: any[] | Object, index: number) => {
              $('td', row).unbind('click');
              $('td', row).bind('click', () => {
                  this.clicked.emit(this._data[index]);
              });
          }
      };
  }

}
