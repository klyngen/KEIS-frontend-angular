import {TimeStamp} from './time-stamp';

export interface Instance {
    id: number;
    condition: number;
    equipment: number;
    RDFID: string;
    rented: number;
    // HOPE THIS WORKS
    timeStamp: TimeStamp;
    //created_at: string;
    //updated_at: string;
}
