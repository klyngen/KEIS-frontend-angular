
import {Instance} from './instance';
import {TimeStamp} from './time-stamp';
import { Timestamp } from 'rxjs';
import { ITableElement } from '../itable-element';

export interface IEquipment {
    id: number;
    timeStamp: TimeStamp;
    model: number;
    Description: string;
    brands: string;
    types: string;
    instances: Instance[];
    available: number;
    total: number;
    rented: number;
    updated_at: string;
    created_at: string;
}

export class Equipment implements ITableElement {
    equipment: IEquipment;

    constructor(equipment: IEquipment) {
        this.equipment = equipment;
    }

    createHeader(): string[] {
        return [''];
    }

    createDataRow(): any[] {
        return ['']
    }


}
