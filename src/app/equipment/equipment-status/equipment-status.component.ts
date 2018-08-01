import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from '../../httpClient/equipment';

@Component({
  selector: 'equipment-status',
  templateUrl: './equipment-status.component.html',
  styleUrls: ['./equipment-status.component.css']
})
export class EquipmentStatusComponent implements OnInit {

    _data = [];
    _height = 350;
    status = 'success';
    average = 10.0;

  constructor() { }

    @Input()
    set data(data: Equipment) {
        //this._data = data;
        let average = 0;
        const temp = this.createBaseStats();
        if (data !== undefined) {
            if (data.getValue('instances') !== null) {
                data.getValue('instances').forEach(item => {
                    temp[item.value[1].value].value += 1;
                    average += item.value[1].value;
                });

                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].value === 0) {
                        temp.splice(i, 1);
                        i = 0;
                    }
                }
                this.average = average / data.getValue('instances').length;
                this.createStatus(this.average);
            }
            this._data = temp;
            this._height = (100 + (temp.length * 20));
        }
    }

    createStatus(average: number) {
        if (average > 7) {
            this.status = 'success';
        } else if (average > 4) {
            this.status = 'warning';
        } else {
            this.status = 'danger';
        }
    }

    elementWidth(): number {
        return $('.equipment-status').width();
    }

    private createBaseStats(): any[] {
        const stats = [];
        for (let i = 0; i <= 10; i++) {
            stats[i] = {name: i, value: 0};
        }
        return stats;
    }

  ngOnInit() {
  }
}
