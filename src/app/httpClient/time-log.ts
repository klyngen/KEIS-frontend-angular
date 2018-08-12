import { TableElement } from './table-element';

export class TimeLog extends TableElement {
    blackList: string[] = ['created_at', 'updated_at', 'id', 'user', 'stop'];

    nameMapping: {[key: string]: string} = {};
    constructor(data) {
        super(data);
        this.nameMapping['hours'] = "Hours";
        this.nameMapping['name'] = 'Name';
        this.nameMapping['rfid'] = 'RFID';

        // Lets gather data by user!!!
    }
}
