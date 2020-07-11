import { Board, Color } from "../src/types";

import { createBoardForTesting } from "./createBoardForTesting";

import { getMaximumPossibleConnections, playGame } from "../src/automatedAgent";
import { selectColor, gameWon } from "../src/game";

const maximumPossibleConnectionsTestCases: {
    color: Color;
    connections: number;
}[] = [
    { color: Color.Green, connections: 2 },
    { color: Color.Yellow, connections: 9 },
    { color: Color.Red, connections: 11 },
    { color: Color.Blue, connections: 12 },
    { color: Color.Green, connections: 13 },
    { color: Color.Pink, connections: 14 },
    { color: Color.Red, connections: 15 },
    { color: Color.Yellow, connections: 16 },
];

describe("automatedAgent", () => {
    let board: Board;

    beforeEach(() => {
        board = createBoardForTesting();
    });

    it("getMaximumPossibleConnections returns the correct color at each step", () => {
        maximumPossibleConnectionsTestCases.forEach((testCase) => {
            const maximumPossibleConnections = getMaximumPossibleConnections(
                board
            );

            expect(maximumPossibleConnections.color).toBe(testCase.color);
            expect(maximumPossibleConnections.possibleConnectedTiles).toBe(
                testCase.connections
            );

            board = selectColor(board, maximumPossibleConnections.color);
        });
    });

    it("playGame plays the game until the game is won", () => {
        expect(gameWon(board)).toBe(false);

        const colorsToSelect = playGame(board);
        colorsToSelect.forEach((color) => {
            board = selectColor(board, color);
        });

        expect(gameWon(board)).toBe(true);
    });
});
