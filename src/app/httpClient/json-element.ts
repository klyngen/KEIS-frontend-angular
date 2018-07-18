
/**
 * Abstraction from a json element / object
 */
export class JsonElement {
    key: string;
    value: any;


  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }

}
