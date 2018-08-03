import { Component, OnInit } from '@angular/core';
import { User } from '../httpClient/user';
import { KeisAPIService } from '../keis-api.service';
import { Subject } from 'rxjs';
import { TableElement } from '../httpClient/table-element';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    _users: User[] = [];
    _selected: User;

    _addSubject: Subject<boolean> = new Subject();
    _refreshObserver: Subject<boolean> = new Subject();
    _tableReload: Subject<boolean> = new Subject();
    _dataSubject: Subject<TableElement[]> = new Subject();

    fetchFlake: string;
    loaded = false;

    constructor(private httpClient: KeisAPIService) {
        this.fetchFlake = httpClient.snowflake();

        this.httpClient.getObserver().subscribe(item => {
            if (item.correlationId === this.fetchFlake) {
                this._users = null;
                this._users = item.data;
                //this._tableReload.next();
                this._dataSubject.next(item.data);
            }
        });

        this._refreshObserver.asObservable().subscribe(item => {
            httpClient.getAllUsers(this.fetchFlake);
        });
    }

    ngOnInit() {
        this.httpClient.getAllUsers(this.fetchFlake);
    }

    clicked(event) {
        this._selected = event;
        this.loaded = true;
    }

    newButton() {
        this._addSubject.next();
        this.loaded = true;
    }

    newElement() {
        this.httpClient.getAllUsers(this.fetchFlake);
    }

}
