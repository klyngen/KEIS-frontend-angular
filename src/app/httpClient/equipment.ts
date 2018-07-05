
import {Instance} from './instance';
import {TimeStamp} from './time-stamp';

export interface Equipment {
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
}
