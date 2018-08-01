import { Component, OnInit } from '@angular/core';
import { Alert } from '../Models/alert';
import {AlertServiceService} from '../alert-service.service';

// Issues base url

@Component({
  selector: '[alert]',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
    issueUrl = 'https://github.com/klyngen/KEIS/issues/new';
    alerts: Alert[] = [];
    messages: Alert[] = [];
    newMessages: '';

    constructor(private alertService: AlertServiceService) {
    }

    ngOnInit() {
        this.alertService.getObserver().subscribe((alert: Alert) => {
            if (!alert) { // Empty alert AKA null
                this.alerts = []; return;
            }
            this.pushAlert(alert);
        });
    }

    pushAlert(alert: Alert) {
        switch (alert.classType) {
            case 'danger':
                this.alerts.push(alert);
                break;
            case 'warning':
                this.alerts.push(alert);
                break;
            default:
                this.messages.push(alert);
                break;
        }
    }

    eraseAlerts() {
        this.alerts = [];
        // TODO reflect on service
        this.alertService.clear();
    }

    readMessages() {
        this.newMessages = '';
    }

    removeAlert(index) {
        try {
            this.alerts.splice(index, 1);
        } catch (e) {
            // Should this be its own alert :o?
            this.alertService.addAlert(new Alert('danger', 'Message error', 'An error ocurred when trying to erase messages. Following exception' + e));
        }
    }

    removeMessage(index) {
        try {
            this.messages.splice(index, 1);
        } catch (e) {
            // Should this be its own alert :o?
            this.alertService.addAlert(new Alert('danger', 'Message error', 'An error ocurred when trying to erase messages. Following exception' + e));
        }
    }

}
