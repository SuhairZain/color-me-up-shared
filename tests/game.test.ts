import { Board, Color, Tile } from "../src/types";

import { getAdjacentTiles } from "../src/game";

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
});
