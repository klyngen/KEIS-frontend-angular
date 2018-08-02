
import {TableElement} from './table-element';

export class Equipment extends TableElement {
    blackList: string[] = [
        'created_at',
        'updated_at'
    ];

    nameMapping: {[key: string]: string} = {};

    constructor (data?) {
        super(data);
        this.nameMapping['brands'] = 'Brand';
        this.nameMapping['types'] = 'Type';
        this.nameMapping['model'] = 'Model';
        this.nameMapping['rented'] = 'Rented';

        this.priority['id'] = 0;
        this.priority['brand'] = 1;
        this.priority['model'] = 2;
    }
}
