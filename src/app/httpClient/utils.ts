
import { Equipment } from "./equipment";
import { JsonElement } from './json-element';
import { TableElement } from "./table-element";
import { User } from "./user";
import { Rent } from "./rent";
export class Utils {
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
                    elements.push(new JsonElement(key, this.object2JsonElement(data[key])));
                } else if (Array.isArray(data[key])) {
                    console.log("is arrya");
                    const tempArray = [];
                    data[key].forEach(item => {
                        tempArray.push(this.object2JsonElement(item));
                    });
                    elements.push(new JsonElement(key, tempArray));
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

    /** Creates a general tableElement
      * @param data - Object dictionary
      */
    static object2TableElement(data): TableElement[] | TableElement {
        if (Array.isArray(data)) {
            const elements: TableElement[] = [];
            data.forEach(item => {
                elements.push(new TableElement(this.object2JsonElement(item)));
            });
            return elements;
        }
        return [new TableElement(this.object2JsonElement(data))];
    }


    static object2User(data): User[] {
        const user: User[] = [];

        // Is there several equipment?
        if (Array.isArray(data)) {
            data.forEach(item => {
                user.push(new User(this.object2JsonElement(item)));
            });
            return user;
        }

        // If only single equipment
        user.push(new User(this.object2JsonElement(data)));
        return user;
    }

    static object2Rent(data): Rent[] {
        const elements = this.object2TableElement(data);
        const result = [];
        if (Array.isArray(elements)) {
            elements.forEach(item => {
                result.push(new Rent(item.data));
            });
        }

        return result;
    }
}
