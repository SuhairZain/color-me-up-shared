import { random } from "lodash-es";

export function randomItem<T>(items: T[]) {
    return items[random(items.length - 1)];
}
