import { Board, Color, Tile } from "../src/types";

import { getAdjacentTiles, getConnectedTiles, selectColor } from "../src/game";

type TilePosition = [number, number];

const sourceTileAndAdjacentTiles: [TilePosition, TilePosition[]][] = [
    [
        [0, 0],
        [
            [0, 1],
            [1, 0],
        ],
    ],
    [
        [0, 3],
        [
            [0, 2],
            [1, 3],
        ],
    ],
    [
        [3, 0],
        [
            [2, 0],
            [3, 1],
        ],
    ],
    [
        [3, 3],
        [
            [2, 3],
            [3, 2],
        ],
    ],
    [
        [0, 1],
        [
            [0, 0],
            [0, 2],
            [1, 1],
        ],
    ],
    [
        [1, 0],
        [
            [0, 0],
            [1, 1],
            [2, 0],
        ],
    ],
    [
        [1, 3],
        [
            [0, 3],
            [1, 2],
            [2, 3],
        ],
    ],
    [
        [3, 1],
        [
            [2, 1],
            [3, 0],
            [3, 2],
        ],
    ],
    [
        [1, 1],
        [
            [0, 1],
            [1, 0],
            [1, 2],
            [2, 1],
        ],
    ],
];

const selectColorSteps: { color: Color; expectedConnected: number }[] = [
    { color: Color.Green, expectedConnected: 2 },
    { color: Color.Yellow, expectedConnected: 9 },
    { color: Color.Red, expectedConnected: 11 },
    { color: Color.Blue, expectedConnected: 12 },
    { color: Color.Pink, expectedConnected: 13 },
    { color: Color.Red, expectedConnected: 14 },
    { color: Color.Green, expectedConnected: 15 },
    { color: Color.Yellow, expectedConnected: 16 },
];

const mapToOnlyRowAndColumn = (tile: Tile) => {
    const { column, row } = tile;

    return { column, row };
};

const sortTiles = (a: Tile, b: Tile): number => {
    if (a.row !== b.row) {
        return a.row - b.row;
    }

    return a.column - b.column;
};

const expectSelectColorWorksAsExpected = (
    board: Board,
    colorToSelect: Color,
    expectedConnected: number
) => {
    const updatedBoard = selectColor(board, colorToSelect);
    const originTile = updatedBoard.tiles[0][0];

    const { connectedTiles } = getConnectedTiles(
        updatedBoard,
        originTile,
        originTile.color,
        {}
    );

    expect(connectedTiles.length).toBe(expectedConnected);

    return updatedBoard;
};

describe("game", () => {
    let board: Board;

    beforeEach(() => {
        board = {
            colors: [
                Color.Blue,
                Color.Green,
                Color.Red,
                Color.Pink,
                Color.Yellow,
            ],
            tiles: [
                [Color.Blue, Color.Red, Color.Yellow, Color.Red],
                [Color.Green, Color.Yellow, Color.Red, Color.Pink],
                [Color.Yellow, Color.Yellow, Color.Yellow, Color.Yellow],
                [Color.Yellow, Color.Blue, Color.Yellow, Color.Green],
            ].map((row, i) => {
                return row.map((color, j) => ({
                    color,
                    column: j,
                    row: i,
                }));
            }),
        };
    });

    test("getAdjacentTiles returns the correct tiles", () => {
        sourceTileAndAdjacentTiles.forEach((sourceAndAdjacent) => {
            const [source, adjacent] = sourceAndAdjacent;

            const [sourceRow, sourceColumn] = source;

            const sourceTile = board.tiles[sourceRow][sourceColumn];

            expect(
                getAdjacentTiles(board, sourceTile)
                    .sort(sortTiles)
                    .map(mapToOnlyRowAndColumn)
            ).toEqual(
                adjacent.map((tilePosition) => ({
                    row: tilePosition[0],
                    column: tilePosition[1],
                }))
            );
        });
    });

    test("getConnectedTiles returns the correct tiles", () => {
        const connectedTiles = getConnectedTiles(
            board,
            board.tiles[1][1],
            board.tiles[1][1].color,
            {}
        );
        expect(
            connectedTiles.connectedTiles
                .sort(sortTiles)
                .map(mapToOnlyRowAndColumn)
        ).toEqual([
            { row: 1, column: 1 },
            { row: 2, column: 0 },
            { row: 2, column: 1 },
            { row: 2, column: 2 },
            { row: 2, column: 3 },
            { row: 3, column: 0 },
            { row: 3, column: 2 },
        ]);
    });

    test("selectColor changes the color of tiles connected to origin to the selected color", () => {
        selectColorSteps.forEach((testCase) => {
            board = expectSelectColorWorksAsExpected(
                board,
                testCase.color,
                testCase.expectedConnected
            );
        });
    });
});
