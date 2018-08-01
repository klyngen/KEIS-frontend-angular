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

  constructor() { }

    @Input()
    set data(data: Equipment) {
        //this._data = data;
        const temp = this.createBaseStats();
        if (data !== undefined) {
            if (data.getValue('instances') !== null) {
                data.getValue('instances').forEach(item => {
                    console.log(item.value[1].value);
                    temp[item.value[1].value].value += 1;
                });

                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].value === 0) {
                        temp.splice(i, 1);
                        i = 0;
                    }
                }
                temp.splice(0, 1);
            }
            console.log(temp);
            this._data = temp;
            this._height = (100 + (temp.length * 20));
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
