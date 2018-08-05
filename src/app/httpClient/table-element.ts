import { ITableElement } from '../itable-element';
import { JsonElement } from './json-element';

export class TableElement implements ITableElement {
    data: JsonElement[] = [];
    nameMapping: {[key: string]: string} = {};
    priority: {[key: string]: number} = {};
    blackList: string[] = ['success', 'error'];

    constructor(data?: JsonElement[]) {
        this.data = data === undefined ? [] : data;
    }

    /**
     * Checks is a parameter is blacklisted
     * @param key - key of an item
     */
    private isBlackListed(key: string): boolean {
        let blacklisted = false;
        this.blackList.forEach(item => {
            if (item === key) {
                blacklisted = true;
                return; // Break
            }
        });
        return blacklisted;
    }

    /**
     * Creates the header row for a table
     * NB: SHOULD BE A RECURCIVE FUNCTION
     */
    createHeader(array?: any[]): string[] {
        const dta = array !== undefined? array : this.data;
        let header: string[] = [];
        dta.sort((n1, n2) => {
            const priority1 = this.priority[n1.key] === undefined ? 100 : this.priority[n1.key];
            const priority2 = this.priority[n2.key] === undefined ? 100 : this.priority[n2.key];
            return priority1 - priority2;
        });

        dta.forEach(item => {
            if (Array.isArray(item.value)) {
                header = header.concat(this.createHeader(item.value));
            }
            if (!this.isBlackListed(item.key)) {
                // See if there is a mapping
                const alternative = this.nameMapping[item.key];

                if (alternative !== undefined) {
                    header.push(alternative);
                } else {
                    header.push(item.key);
                }

            }
        });

        return header;
    }


    private fetchKey(value: string): string {
        for (const key in this.nameMapping) {
            if (this.nameMapping[key] === value) {
                return key;
            }
        }

        return value;
    }

    createDataRow(header: string[]): any[] {
        const data: any[] = [];
        header.forEach(item => {
            const head = this.fetchKey(item);
            const res = this.getValue(head);
            data.push(res);
        });
        return data;
    }

    setValuePair(key: string, value: any) {
        this.data.push(new JsonElement(this.fetchKey(key), value));
    }

    setValue(key: string, value: any) {
        const resKey = this.fetchKey(key);
        this.data.forEach(item => {
            if (item.key === resKey) {
                item.value = value;
            }
        });
    }

    getValue(key: string, data?: any[]): any {

        const dta = data !== undefined ? data : this.data;

        const resKey = this.fetchKey(key);
        let res = null;
        dta.forEach(item => {
            if (Array.isArray(item.value)) {
                const temp = this.getValue(key, item.value);
                if (temp !== null) {
                    res = temp;
                    return;
                }
            }

            if ((item.key === resKey) && (res === null)) {
                res = item.value;
                return;
            }
        });
        return res;
    }

    createObject(): Object {
        const data = {};
        this.data.forEach(item => {
            data[item.key] = item.value;
        });

        return data;
    }

    createDatatableHeader(): any {
        const header = this.createHeader();
        const res = [];

        header.forEach(item => {
            res.push({'title': item});
        });
        return res;
    }
}
