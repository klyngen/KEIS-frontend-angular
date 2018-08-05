import { Component, OnInit } from '@angular/core';
import { KeisAPIService } from '../../keis-api.service';

@Component({
  selector: 'rent-stats',
  templateUrl: './rent-stats.component.html',
  styleUrls: ['./rent-stats.component.css']
})
export class RentStatsComponent implements OnInit {
  _size = 500;
  _fetchStats: string;
  _data =  [{'name': 'test', 'value': 50}, {'name': 'to', 'value': 20}];
  _fetchFlake: string;

  constructor(private httpClient: KeisAPIService) {
    this._fetchFlake = httpClient.snowflake();

    httpClient.getObserver().subscribe(item => {
      if (this._fetchFlake === item.correlationId) {
        const temp = [];
        for (let key in item.data) {
          temp.push({name: key.charAt(0).toUpperCase()+key.slice(1), value: item.data[key] });
        }
        this._data = temp;
        console.log(this._data);
      }
    });
   }

  ngOnInit() {
    this._size = $('.rentData').width();
    this.httpClient.getRentStatistics(this._fetchFlake);
  }
}
