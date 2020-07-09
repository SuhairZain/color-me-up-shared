import { createEmptyArray } from "../src/utils/arrays";

describe("createEmptyArray", () => {
    test("creates an empty array with the correct length and can be mapped with the correct index", () => {
        const ARRAY_LENGTH = 7;

        const array = createEmptyArray(ARRAY_LENGTH);
        expect(array).toHaveLength(ARRAY_LENGTH);

        const arrayMappedToIndex = array.map((_, i) => i);
        arrayMappedToIndex.forEach((val, i) => {
            expect(val).toBe(i);
        });
    });
});
