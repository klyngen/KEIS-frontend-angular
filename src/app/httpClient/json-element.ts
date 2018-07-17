import { Equipment } from "./equipment";

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


/**
 * convert objects into a nicer format
 * @param data - dictionary
 * @return - Array of JsonElement
 */
  private static object2JsonElement(data): JsonElement[] {
    let elements: JsonElement[] = [];

    if (typeof data === 'object') {
      // Add all keyes to the array
      for (const key in data) {
        // There is some nested elements
        if (typeof data[key] === 'object') {
          elements = elements.concat(this.object2JsonElement(data[key]));
        } else {
          elements.push(new JsonElement(key, data[key]));
        }
      }
    }

    return elements;
  }

  static object2Equipment(data): Equipment[] {
    const equipment: Equipment[] = [];

    // Is there several equipment?
    if (Array.isArray(data)) {
      data.forEach(item => {
        equipment.push(new Equipment(this.object2JsonElement(item)));
      });
      return equipment;
    }

    // If only single equipment
    equipment.push(new Equipment(this.object2JsonElement(data)));
    return equipment;
  }
}
