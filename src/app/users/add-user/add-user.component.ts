import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableElement } from '../../httpClient/table-element';
import { KeisAPIService } from '../../keis-api.service';
import { Equipment } from '../../httpClient/equipment';
import { User } from '../../httpClient/user';
import { Subject } from 'rxjs';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    addFlake: string;
    updateFlake: string;
    searchFlake: string;

    // User data
    _studentNumber = '';
    _email = '';
    _name = '';

    _newUser = false;
    _loaded = false;
    _userExist = false;


    _data: TableElement;

    @Output() newElement = new EventEmitter<User>();

    @Input()
    set data(element: TableElement) {
        if (element !== undefined) {
            this._data = element;
            this._name = element.getValue('name');
            this._email = element.getValue('email');
            this._studentNumber = element.getValue('studentNumber');
            this._newUser = false;
            this._loaded = true;
            return;
        }
        this._loaded = false;
    }

    @Input()
    set newTrigger(subject: Subject<boolean>) {
        subject.asObservable().subscribe(item => {
            this._email = '';
            this._name = '';
            this._studentNumber = '';
            this._newUser = true;
            this._loaded = true;
        });
    }

    constructor(private httpClient: KeisAPIService) {
        this.addFlake = httpClient.snowflake();
        this.updateFlake = httpClient.snowflake();
        this.searchFlake = httpClient.snowflake();
    }

    ngOnInit() {
        this.httpClient.getObserver().subscribe(item => {
            if (item.correlationId === this.addFlake) {
                this.newElement.emit(item.data);
            } else if (item.correlationId === this.updateFlake) {
            } else if (item.correlationId === this.searchFlake) {
                if (item.data.length > 0) {
                    this._userExist = false;
                    item.data.forEach(it => {
                        if (it.getValue('studentNumber') === this._studentNumber) {
                            this._userExist = true;
                            return;
                        }
                    });
                } else {
                    this._userExist = false;
                }
            }
        });
    }

    verify(email) {
        // Do the network call
        if (!email.valid) {
            return false;
        }
        if (this._name.length > 0 && this._email.length > 0 && this._studentNumber.length > 0 && ((!this._userExist && this._newUser) || (!this._newUser))) {
            return true;
        }
        return false;
    }

    verifyNumber(data) {
        this.httpClient.userSearch(this.searchFlake, data);
    }

    submit() {
        if (this.verify()) {

            const element = new TableElement();
            element.setValuePair('name', this._name);
            element.setValuePair('email', this._email);
            element.setValuePair('studentNumber', this._studentNumber);
            if (this._newUser) {
                this.httpClient.updateUser(this.updateFlake, this._data.getValue('id'), element);
                return;
            }

            if (this._userExist) {
                return;
            }
            this.httpClient.createUser(this.addFlake, element);
        }
    }
}
