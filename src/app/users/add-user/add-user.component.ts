import { Component, OnInit } from '@angular/core';
import { TableElement } from '../../httpClient/table-element';
import { KeisAPIService } from '../../keis-api.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    addFlake: string;

    // User data
    _studentNumber = '';
    _email = '';
    _name = '';

    constructor(private httpClient: KeisAPIService) {
        this.addFlake = httpClient.snowflake();
    }

    ngOnInit() {
        this.httpClient.getObserver().subscribe(item => {
            if (item.correlationId === this.addFlake) {
                console.log(item.data);
            }});
    }

    verify() {
        // Do the network call
        if (this._name.length > 0 && this._email.length > 0 && this._studentNumber.length > 0) {
            return true;
        }
        return false;
    }

    submit() {
        if (this.verify()) {
            const element = new TableElement();
            element.setValuePair('name', this._name);
            element.setValuePair('email', this._email);
            element.setValuePair('studentNumber', this._studentNumber);
            this.httpClient.createUser(this.addFlake, element);
        }
    }
}
