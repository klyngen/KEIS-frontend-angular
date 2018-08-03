import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { ITableElement } from '../itable-element';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { TableElement } from '../httpClient/table-element';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit, AfterViewInit, OnDestroy {
    _data: ITableElement[] = [];
    _tempData: ITableElement[] = [];
    _header: string[] = [];
    _init = false;
    dta = [];

    @Output() clicked = new EventEmitter<ITableElement>();
    @ViewChild(DataTableDirective) dtElement: DataTableDirective;

    dtTrigger: Subject<any> = new Subject();
    dtOptions: DataTables.Settings = {};

    ngAfterViewInit(): void {
        this.dtOptions.data = this.dta;
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

    @Input()
    set data(data: ITableElement[]) {
        this._data = data;

        if (this.dta.length > 0) {
            this.dta = [];
        }

        if (data.length > 0) {
            this._header = data[0].createHeader();
            this.dtOptions.columns = data[0].createDatatableHeader();
            if (this._data !== undefined) {
                this.reload();
            }
        }
    }

    @Input()
    set reloadTrigger(observer: Subject<TableElement>) {
        observer.subscribe(item => {
            if (item !== null) {
                this.dta.push(item.createDataRow(this._header));
                this.dtTrigger.next();
                this.reload();
            }
        });
    }

    reload() {
        if (this.dtElement.dtInstance !== undefined) {
            this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                dtInstance.destroy();
                const d = [];
                if (this._data !== undefined) {
                    this.dta = [];
                    this._data.forEach(item => {
                        console.log(item);
                        d.push(item.createDataRow(this._header));
                    });
                    this.dta = d;
                    this.dtOptions.data = d;
                }
                this.dtTrigger.next();
            });
        } else {
        }

        this.dtTrigger.next();

    }

  constructor() { }

  ngOnInit() {
      this.dtOptions = {
          rowCallback: (row: Node, data: any[] | Object, index: number) => {
              $('td', row).unbind('click');
              $('td', row).bind('click', () => {
                  const id = data[0];
                  this._data.forEach(item => {
                      if (item.getValue('id') === id) {
                          this.clicked.emit(item);
                          return;
                      }
                  });
              });
          }
      };
      this._init = true;
  }
}
