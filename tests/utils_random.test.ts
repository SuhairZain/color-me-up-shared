import { randomItem } from "../src/utils/random";

describe("randomItem", () => {
    test("returns an item within the array", () => {
        const items = [
            1,
            2,
            { hello: "world" },
            [4, 5],
            true,
            false,
            "this_world",
        ];

        expect(items).toContain(randomItem(items));
    });
});
