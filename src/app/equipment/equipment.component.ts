import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../httpClient/equipment';
import {KeisAPIService} from '../keis-api.service';

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

    equipment: Equipment[] = [];
    selected: Equipment = null;
    _new = false;
    constructor(private httpClient: KeisAPIService) {
    }

  ngOnInit() {
      const snowflake = this.httpClient.snowflake();
      this.httpClient.getObserver().subscribe(data => {
          if (data.correlationId === snowflake) {
              this.equipment = data.data;
          }
      });
      this.httpClient.getAllEquipment(snowflake);
  }
    rowClicked(equipment: Equipment) {
        this.selected = equipment;
    }

    newEquipment() {
        this._new = true;
    }
}
