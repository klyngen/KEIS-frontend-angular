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
        this.nameMapping['model'] = 'Model';
        this.nameMapping['brands'] = 'Brand';
        this.nameMapping['types'] = 'Type';
        this.nameMapping['condition'] = 'Condition';
        this.nameMapping['name'] = 'Name';
        this.nameMapping['studentNumber'] = 'Studentnumber';
        this.nameMapping['email'] = 'Email';
    }
}
