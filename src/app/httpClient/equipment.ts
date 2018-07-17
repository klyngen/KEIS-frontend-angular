
import { JsonElement } from './json-element';
import {TableElement} from './table-element';

export class Equipment extends TableElement {
  blackList: string[] = [
    'created_at',
    'updated_at',
    'id'
  ];

  nameMapping: {[key: string]: string} = {};

  constructor (data: JsonElement[]) {
    super(data);
    this.nameMapping['brands'] = 'Brand';
    this.nameMapping['types'] = 'Type';
    this.nameMapping['model'] = 'Model';
  }
}
