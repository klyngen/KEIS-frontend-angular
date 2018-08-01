import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../httpClient/equipment';
import {KeisAPIService} from '../keis-api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
    tableTrigger: Subject<any> = new Subject();
    refreshTrigger: Subject<any> = new Subject();
    equipment: Equipment[] = [];
    selected: Equipment = null;
    equipmentFlake: string;
    _new = false;
    _push: Equipment = null;

    constructor(private httpClient: KeisAPIService) {
        this.refreshTrigger.asObservable().subscribe(item => {
            this.httpClient.getAllEquipment(this.equipmentFlake);
        });
    }

  ngOnInit() {
      this.equipmentFlake = this.httpClient.snowflake();
      this.httpClient.getObserver().subscribe(data => {
          if (data.correlationId === this.equipmentFlake) {
              this.equipment = data.data;
          }
      });
      this.httpClient.getAllEquipment(this.equipmentFlake);
  }
    rowClicked(equipment: Equipment) {
        this.selected = equipment;
    }

    newEquipment() {
        this._new = true;
    }

    addElement(data) {
        this.tableTrigger.next(new Equipment(data.data));
    }

    delete() {
        if (this.selected !== undefined) {
            this.httpClient.deleteEquipment(this.selected.getValue('id'));
            this.httpClient.getAllEquipment(this.equipmentFlake);
        }
    }
}
