import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TableElement } from '../httpClient/table-element';
import { KeisAPIService } from '../keis-api.service';
import { Utils } from '../httpClient/utils';
import { TimeLog } from '../httpClient/time-log';

@Component({
  selector: 'timelog-stats',
  templateUrl: './timelog-stats.component.html',
  styleUrls: ['./timelog-stats.component.css']
})
export class TimelogStatsComponent implements OnInit {

    constructor(private httpClient: KeisAPIService) {
        this.fetchFlake = httpClient.snowflake();
        this.httpClient.getObserver().subscribe(item => {
            if (item.correlationId === this.fetchFlake) {
                const data = [];

                item.data.forEach(sitem => {
                    const snumber = sitem.getValue('studentNumber');

                    data.forEach(ssitem => {
                        const ssnumber = ssitem.getValue('studentNumber');
                        if (snumber === ssnumber) {
                            const hour = sitem.getValue('hours');
                        }
                    });
                });

                //item.data.forEach(sitem => {
                    //data.push(new TimeLog(sitem.data));
                //});
                //this._tableData.next(data);
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
