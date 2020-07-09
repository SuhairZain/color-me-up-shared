import { createBoard } from "../src/createBoard";

describe("createBoard", () => {
    test("creates a board with the correct number of rows and columns", () => {
        const BOARD_SIZE = 4;

        const board = createBoard(BOARD_SIZE, 4);
        const { tiles } = board;

        expect(tiles).toHaveLength(BOARD_SIZE);
        tiles.forEach((row, i) => {
            expect(row).toHaveLength(BOARD_SIZE);

            row.forEach((tile, j) => {
                expect(tile.row).toBe(i);
                expect(tile.column).toBe(j);
            });
        });
    });

    test("the origin tile has colors distinct from the adjacent tiles", () => {
        const board = createBoard(6, 3);
        const { tiles } = board;

        const originColor = tiles[0][0].color;
        expect(tiles[0][1].color).not.toBe(originColor);
        expect(tiles[1][0].color).not.toBe(originColor);
    });
});
