import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../httpClient/equipment';
import {KeisAPIService} from '../keis-api.service';
import { Subject } from 'rxjs';
import { TableElement } from '../httpClient/table-element';
import { JsonElement } from '../httpClient/json-element';

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
    refreshTrigger: Subject<any> = new Subject();
    equipment: Equipment[] = [];
    selected: Equipment = null;
    equipmentFlake: string;
    singleEquipmentFlake: string;
    instanceFlake: string;
    deleteEquipmentFlake: string;
    _new = false;
    _push: Equipment = null;
    _singleData: Equipment;
    _tableData: Subject<TableElement[]> = new Subject();

    constructor(private httpClient: KeisAPIService) {
        this.refreshTrigger.asObservable().subscribe(item => {
            this.httpClient.getAllEquipment(this.equipmentFlake);
            this.httpClient.getSingleEquipment(this.singleEquipmentFlake, this.selected.getValue('id'));
        });
    }

  ngOnInit() {
      this.equipmentFlake = this.httpClient.snowflake();
      this.singleEquipmentFlake = this.httpClient.snowflake();
      this.instanceFlake = this.httpClient.snowflake();
      this.deleteEquipmentFlake = this.httpClient.snowflake();

      this.httpClient.getObserver().subscribe(data => {
          if (data.correlationId === this.equipmentFlake) {
              this.equipment = data.data;
              this._tableData.next(data.data);
          }

          if (data.correlationId === this.singleEquipmentFlake) {
              this._singleData = data.data;
          }

          if (data.correlationId === this.instanceFlake) {
              this._singleData.getValue('instances').push(new JsonElement(data.data.getValue('id'), data.data));
              this.httpClient.getSingleEquipment(this.singleEquipmentFlake, this.selected.getValue('id'));
          }

          if (data.correlationId === this.deleteEquipmentFlake) {
              this.selected = null;
              this._new = true;
              this.httpClient.getAllEquipment(this.equipmentFlake);
          }
      });
      this.httpClient.getAllEquipment(this.equipmentFlake);
  }
    rowClicked(equipment: Equipment) {
        this.selected = equipment;
        this.httpClient.getSingleEquipment(this.singleEquipmentFlake, equipment.getValue('id'));
    }

    newEquipment() {
        this._new = true;
    }

    addElement(data) {
        this._tableData.next(this.equipment.concat(data));
    }

    delete() {
        if (this.selected !== undefined) {
            this.httpClient.deleteEquipment(this.deleteEquipmentFlake, this.selected.getValue('id'));
        }
    }

    editHeight(): number {
        if (this.selected !== null) {
            return $('.table-column').height();
        }
        return 1000;
    }

    newInstance(element: TableElement) {
        element.setValuePair('equipment', this._singleData.getValue('id'));
        this.httpClient.addInstance(this.instanceFlake, element);
    }
}
