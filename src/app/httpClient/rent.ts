import { TableElement } from './table-element';

export class Rent extends TableElement {
    blackList: string[] = [
        'created_at',
        'updated_at'
    ];

    nameMapping: {[key: string]: string} = {};

    constructor(data?) {
        super(data);
    }
}
