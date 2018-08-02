import { TableElement } from "./table-element";

export class User extends TableElement {


    constructor (data?) {
        super (data);

        // Name Mapping
    }

    blackList: string[] = [
        'created_at',
        'updated_at'
    ];
}
