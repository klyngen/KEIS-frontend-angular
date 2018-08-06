import { Component, OnInit, Input } from '@angular/core';
import { KeisAPIService } from '../../keis-api.service';
import { Rent } from '../../httpClient/rent';
import { User } from '../../httpClient/user';

@Component({
    selector: 'user-rent',
    templateUrl: './user-rent.component.html',
    styleUrls: ['./user-rent.component.css']
})
export class UserRentComponent implements OnInit {
    rentFlake: string;
    _data: Rent[];
    _user: User;

    @Input() set user(user: User) {
        this._user = user;

        if (this._user !== undefined) {
            console.log(this._user.getValue('id'));
            this.httpClient.getUserRent(this.rentFlake, this._user.getValue('id'));
        }
    }

    constructor(private httpClient: KeisAPIService) {
        this.rentFlake = httpClient.snowflake();

        httpClient.getObserver().subscribe(item => {
            if (item.correlationId === this.rentFlake) {
                console.log(item.data);
                this._data = item.data;
            }
        });
    }

    ngOnInit() {
    }

}
