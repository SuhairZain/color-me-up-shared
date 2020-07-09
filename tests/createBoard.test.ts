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
});
