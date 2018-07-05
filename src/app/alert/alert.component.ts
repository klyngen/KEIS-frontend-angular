import { Component, OnInit } from '@angular/core';
import { Alert } from '../Models/alert';
import {AlertServiceService} from '../alert-service.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
    alerts: Alert[];
    newMessages: '';
    constructor(private alertService: AlertServiceService) { }

    ngOnInit() {
    }

    eraseAlerts() {
        this.alerts = [];
        // TODO reflect on service
    }

    readMessages() {
        this.newMessages = '';
    }

    removeMessage(index) {
        try {
            // Do something with the service
        } catch (e) {
            
        }
    } 

}
