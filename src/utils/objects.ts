/** Creates a shallow copy of an object, shortcut to using Object.assign with an empty object as first param */
export function copy<T extends object>(original: T): T {
    return Object.assign({}, original);
}

/** Creates a shallow copy of an object and applies updates on the copy */
export function extend<T extends object>(source: T, ...updates: Partial<T>[]) {
    return Object.assign(copy(source), ...updates);
}

export function deepCopy<T>(original: T): T {
    if (typeof original !== "object" || original === null) {
        return original;
    }

    if (Array.isArray(original)) {
        return (original as any).map((v: any) => deepCopy(v));
    }

    const copyToUpdate = copy(original as any);

    Object.keys(copyToUpdate).forEach((k) => {
        copyToUpdate[k] = deepCopy(copyToUpdate[k]);
    });

    return copyToUpdate;
}
