import { TableElement } from "./table-element";

export class User extends TableElement {

    nameMapping: {[key: string]: string} = {};

    constructor (data?) {
        super (data);
        this.nameMapping['name'] = 'Name';
        this.nameMapping['email'] = 'Email';
        this.nameMapping['studentNumber'] = 'Student number';

        // Name Mapping
    }

    blackList: string[] = [
        'created_at',
        'updated_at'
    ];

}
