export const createEmptyArray = (length: number, fillWith = 0) => {
    // The arrays created with the "new Array(length)" syntax
    // needs to be filled with some value before we can use them.
    return new Array(length).fill(fillWith);
};
