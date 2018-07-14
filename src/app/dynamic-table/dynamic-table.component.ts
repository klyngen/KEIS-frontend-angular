import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
    _data: Object[] = [];
    _header: string[] = [];

    @Input()
    set data(data) {
        this._data = data;
        this.makeHeader();
    }

    makeHeader() {
        this._header = [];
        for (const key in this._data[0]) {
            this._header.push(key);
        }
    }

  constructor() { }

  ngOnInit() {
  }
}
