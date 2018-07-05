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

    constructor(/*private keisClient: ApiClientService*/ private httpClient: KeisAPIService) { }

  ngOnInit() {
      console.log(this.httpClient.getAllEquipment());
  }
}
