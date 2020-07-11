/** Creates a shallow copy of an object, shortcut to using Object.assign with an empty object as first param */
export declare function copy<T extends object>(original: T): T;
/** Creates a shallow copy of an object and applies updates on the copy */
export declare function extend<T extends object>(source: T, ...updates: Partial<T>[]): any;
export declare function deepCopy<T>(original: T): T;
