import { copy, extend, deepCopy } from "../src/utils/objects";

describe("copy", () => {
    it("Creates a shallow copy of an object", () => {
        const original = { hello: "string", another: true, thisOne: 0 };
        Object.freeze(original);

        const copiedObject = copy(original);

        expect(copiedObject).not.toBe(original);
        expect(copiedObject).toEqual(original);
    });
});

describe("deepCopy", () => {
    it("Creates a deep copy of an object", () => {
        const original = {
            source: "value",
            update1: {},
            update2: [0],
            update3: { key: [false, {}] },
        };
        Object.freeze(original);

        const copiedObject = deepCopy(original);

        expect(copiedObject).not.toBe(original);
        expect(copiedObject).toEqual(original);

        expect(copiedObject.update1).not.toBe(original.update1);
        expect(copiedObject.update2).not.toBe(original.update2);
        expect(copiedObject.update3).not.toBe(original.update3);
        expect(copiedObject.update3.key).not.toBe(original.update3.key);
        expect(copiedObject.update3.key[1]).not.toBe(original.update3.key[1]);
    });
});

describe("extend", () => {
    it("Creates a shallow copy of an object and applies updates to it", () => {
        const original = { source: "value", update1: 0, update2: false };
        Object.freeze(original);

        const extendedObject = extend(
            original,
            { update1: 1 },
            { update2: true }
        );

        expect(extendedObject).not.toBe(original);
        expect(extendedObject).toEqual({
            source: "value",
            update1: 1,
            update2: true,
        });
    });
});
