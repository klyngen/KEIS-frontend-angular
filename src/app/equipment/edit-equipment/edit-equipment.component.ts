import { Component, OnInit, Output, Input } from '@angular/core';
import { Equipment } from '../../httpClient/equipment';
import { KeisAPIService } from '../../keis-api.service';

@Component({
    selector: 'edit-equipment',
    templateUrl: './edit-equipment.component.html',
    styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent implements OnInit {

    loaded = true;
    _data: Equipment;
    _brand: string;
    _type: string;
    _description: string;
    _model: string;
    brandFlake: string;
    typeFlake: string;

    _brandAlternatives: string[] = [];
    _typeAlternatives: string[] = [];

    @Input()
    set data(data) {
        this._data = data;
        this.loaded = true;
    }

    constructor(private apiService: KeisAPIService) {
        this.brandFlake = this.apiService.snowflake();
        this.typeFlake = this.apiService.snowflake();

        this.apiService.getObserver().subscribe(data => {
            if (data.correlationId === this.brandFlake) {
                this._brandAlternatives = data.data;
                console.log(data);
            }

            if (data.correlationId === this.typeFlake) {
                this._typeAlternatives = data.data;
                console.log(data);
            }
        });

        this.apiService.getBrandsAndTypes(this.brandFlake, '/brand');
        this.apiService.getBrandsAndTypes(this.typeFlake, '/type');
    }

    ngOnInit() {
    }


}
