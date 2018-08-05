import { TableElement } from './table-element';

export class Rent extends TableElement {
    blackList: string[] = [
        'created_at',
        'updated_at',
        'equipment',
        'instance',
        'user',
        'id',
        'available',
        'rented',
        'total',
        'users',
        'rfid',
        'Description',
        'purchasetime',
        'instances',
        'stop'
    ];

    nameMapping: {[key: string]: string} = {};

    constructor(data?) {
        super(data);
    }
}
