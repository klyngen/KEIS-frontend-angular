import { Component, OnInit, Output, Input } from '@angular/core';
import { Equipment } from '../../httpClient/equipment';
import { KeisAPIService } from '../../keis-api.service';

@Component({
    selector: 'edit-equipment',
    templateUrl: './edit-equipment.component.html',
    styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent implements OnInit {

    loaded = false;
    _data: Equipment;
    _brand: string;
    _type: string;
    _description: string;
    _model: string;
    _new = false;

    brandFlake: string;
    typeFlake: string;

    _brandAlternatives: string[] = [];
    _typeAlternatives: string[] = [];

    @Input()
    set data(data) {
        if (data !== null) {
            this._data = data;
            this.loaded = true;
            this.parseEquipment();
        }
    }

    @Input()
    set newEquipment(data) {
        if (data) {
            this.reset();
            this.loaded = true;
            this._new = true;
        }
    }

    private parseEquipment() {
        this._brand = this._data.getValue('Brand');
        this._type =  this._data.getValue('Type');
        this._model = this._data.getValue('Model');
        this._description = this._data.getValue('Description');
    }

    private reset() {
        this._description = '';
        this._model = '';
        this._brand = '';
        this._type = '';
        this._new = false;
        this._data = null;
        this.loaded = false;
    }

    constructor(private apiService: KeisAPIService) {
        this.brandFlake = this.apiService.snowflake();
        this.typeFlake = this.apiService.snowflake();

        this.apiService.getObserver().subscribe(data => {
            if (data.correlationId === this.brandFlake) {
                this._brandAlternatives = data.data;
            }

            if (data.correlationId === this.typeFlake) {
                this._typeAlternatives = data.data;
            }
        });

        this.apiService.getBrandsAndTypes(this.brandFlake, '/brand');
        this.apiService.getBrandsAndTypes(this.typeFlake, '/type');
    }

    ngOnInit() {
    }

    cancel() {
        this.reset();
    }

    save() {
        console.log(this);
        if (this._new) {
            // POST
            return;
        }

        // PUT the request
    }


}
