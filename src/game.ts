import { Board, Tile } from "./types";

const INDICES_DELTA_FOR_ADJACENT_TILES = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
];

export const getAdjacentTiles = (board: Board, tile: Tile) => {
    return INDICES_DELTA_FOR_ADJACENT_TILES.map((indicesToAdd) => {
        const row = board.tiles[tile.row + indicesToAdd[0]];

        if (!row) {
            return undefined;
        }

        return row[tile.column + indicesToAdd[1]];
    }).filter((t) => !!t) as Tile[];
};
