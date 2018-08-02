import { Component, OnInit } from '@angular/core';
import { User } from '../httpClient/user';
import { KeisAPIService } from '../keis-api.service';

@Component({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    _users: User[] = [];


    fetchFlake: string;

    constructor(private httpClient: KeisAPIService) {
        this.fetchFlake = httpClient.snowflake();

        this.httpClient.getObserver().subscribe(item => {
            if (item.correlationId === this.fetchFlake) {
                this._users = item.data;
                console.log(this._users);
            }
        });
    }

    ngOnInit() {
        this.httpClient.getAllUsers(this.fetchFlake);
    }

}
