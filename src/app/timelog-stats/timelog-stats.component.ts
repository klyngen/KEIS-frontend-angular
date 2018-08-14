import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TableElement } from '../httpClient/table-element';
import { KeisAPIService } from '../keis-api.service';
import { Utils } from '../httpClient/utils';
import { TimeLog } from '../httpClient/time-log';
import * as XLSX from 'xlsx';
//import * as FileSaver from 'file-saver';

@Component({
  selector: 'timelog-stats',
  templateUrl: './timelog-stats.component.html',
  styleUrls: ['./timelog-stats.component.css']
})
export class TimelogStatsComponent implements OnInit {

    _processed = [];
    _chartData = [];
   
    constructor(private httpClient: KeisAPIService) {
        this.fetchFlake = httpClient.snowflake();
        this.httpClient.getObserver().subscribe(item => {
            // A hell of a function
            if (item.correlationId === this.fetchFlake) {
                console.log(item.data[0].getValue('data'));
                const data = [];

                item.data[0].getValue('data').forEach(sitem => {
                    data.push(new TimeLog(sitem.value));
                });
                console.log(data);

                const processed = [];
                const done = [];
                data.forEach(sitem => {
                    const snumber = sitem.getValue('studentNumber');
                    sitem.setValuePair('times', 1);

                    let alreadyProcessed = false;

                    done.forEach(finished => {
                        if (finished === snumber) {
                            alreadyProcessed = true;
                        }
                    });
                    if (!alreadyProcessed) {
                        data.forEach(ssitem => {
                            const ssnumber = ssitem.getValue('studentNumber');
                            if (snumber === ssnumber) {
                                sitem.setValue('hours', sitem.getValue('hours') +
                                               ssitem.getValue('hours'));
                                sitem.setValue('times', sitem.getValue('times') +1 );
                            }
                        });
                        done.push(snumber);
                        processed.push(sitem);
                    }
                });
                this._tableData.next(processed);
                this._processed = processed;
            }
        });
    }

    _from: string;
    _to: string;

    _tableData: Subject<TableElement[]> = new Subject();
    fetchFlake: string;

    ngOnInit() {
    }

    verify() {
        if (this._to !== undefined && this._from !== undefined) {
            const element = new TableElement();
            element.setValuePair('beginning', this._from);
            element.setValuePair('end', this._to);
            this.httpClient.getLogStats(this.fetchFlake, element);
        }
    }



}
