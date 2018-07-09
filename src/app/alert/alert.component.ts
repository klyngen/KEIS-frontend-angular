import { Component, OnInit } from '@angular/core';
import { Alert } from '../Models/alert';
import {AlertServiceService} from '../alert-service.service';

// Issues base url
const issueUrl = 'https://github.com/klyngen/KEIS/issues/new';

@Component({
  selector: '[alert]',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
    alerts: Alert[] = [];
    newMessages: '';
    constructor(private alertService: AlertServiceService) {
        for (let i = 0; i < 10; i++) {
            this.alerts.push(new Alert('info', 'HEI', 'melding til klingen'));
        }
    }

    ngOnInit() {
        this.alertService.getObserver().subscribe((alert: Alert) => {
            if (!alert) { // Empty alert AKA null
                this.alerts = []; return;
            }
            this.alerts.push(alert);
        });
    }

    eraseAlerts() {
        this.alerts = [];
        // TODO reflect on service
        this.alertService.clear();
    }

    readMessages() {
        this.newMessages = '';
    }

    removeMessage(index) {
        try {
            this.alerts.splice(index, 1);
        } catch (e) {
            // Should this be its own alert :o?
            this.alertService.addAlert(new Alert("danger", "Message error", "An error ocurred when trying to erase messages. Following exception" + e));
        }
    } 

}
