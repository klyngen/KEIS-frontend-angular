import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../httpClient/equipment';

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

    constructor(/*private keisClient: ApiClientService*/ private httpClient: HttpClient) { }

  ngOnInit() {
      //this.keisClient.getAllEquipment();
      this.httpClient.get<Equipment[]>("http://localhost:8000/api/equipment").subscribe(data => {
          console.log(data);
      });
  }
}
