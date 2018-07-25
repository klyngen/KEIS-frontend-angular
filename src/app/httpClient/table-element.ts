import { ITableElement } from '../itable-element';
import { JsonElement } from './json-element';

export class TableElement implements ITableElement {
    data: JsonElement[] = [];
    nameMapping: {[key: string]: string};
    blackList: string[] = [];

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
     */
    createHeader(): string[] {
        const header: string[] = [];

        this.data.forEach(item => {
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
            this.data.forEach(subItem => {
                if (head === subItem.key) {
                    data.push(subItem.value);
                    return; // Break
                }
            });
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

    getValue(key: string): any {
        const resKey = this.fetchKey(key);
        let res = null;
        this.data.forEach(item => {
            if (item.key === resKey) {
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
}
