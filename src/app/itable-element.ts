import { JsonElement } from './httpClient/json-element';

export interface ITableElement {
    data: JsonElement[];
    blackList: string[];
    nameMapping: {[key: string]: string};
    createHeader: () => string[];
    createDataRow: (header: string[]) => any[];
    getValue: (key: string) => any;
}
