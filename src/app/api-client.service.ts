import {Equipment} from './httpClient/equipment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ApiClientService {

    // TODO put this in some configuration file
    baseUrl = 'http://localhost:8000/api';

    constructor(private httpClient: HttpClient) {

    }

    getAllEquipment() {
        console.log(this.baseUrl + "/equipment");
        return this.httpClient.get(this.baseUrl + "/equipment");
    }

}
