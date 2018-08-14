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
    dtOptions: any = {};
    

    ngAfterViewInit(): void {
        this.dtOptions.data = this.dta;
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

    @Input() set observeData(subject: Subject<TableElement[]>) {
        this.dta = [];
        subject.asObservable().subscribe(item => {

            this._data = item;
            if (this.dta.length === 0) {
                this._header = item[0].createHeader();
                this.dtOptions.columns = item[0].createDatatableHeader();
            }

            if (this.dtElement.dtInstance === undefined) {
                this.dtTrigger.next();
            }

            this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                if (item !== undefined) {
                    this.dtOptions.columns = item[0].createDatatableHeader();
                    this.dta.splice(0, this.dta.length);
                    dtInstance.destroy();
                    console.log(item);
                    item.forEach(sitem => {
                        dtInstance.row.add(sitem.createDataRow(this._header));
                        this.dta.push(sitem.createDataRow(this._header));
                    });
                }
                console.log('stuff');
                this.dtTrigger.next();
            });
        });
    }


  constructor() { }

  ngOnInit() {
      this.dtOptions = {
          dom: 'Bfrtip',
          buttons: [
              'columnsToggle',
              'colvis',
              'copy',
              'print',
              'excel',
          ],
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
          },
      };
      this._init = true;
  }
}
