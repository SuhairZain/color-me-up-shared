import { Board, Tile, Color } from "./types";

import { deepCopy } from "./utils/objects";

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

type Visited = {
    [key in string]: boolean;
};

const getVisitedKey = (tile: Tile) => `${tile.row},${tile.column}`;

type ConnectedTilesResult = {
    connectedTiles: Tile[];
    visited: Visited;
};

export const getConnectedTiles = (
    board: Board,
    tile: Tile,
    colorToMatch: Color,
    visited: Visited
): ConnectedTilesResult => {
    const visitedKey = getVisitedKey(tile);

    if (visited[visitedKey]) {
        return {
            connectedTiles: [],
            visited,
        };
    }

    let updatedVisited = {
        ...visited,
        [visitedKey]: true,
    };

    if (tile.color !== colorToMatch) {
        return {
            connectedTiles: [],
            visited: updatedVisited,
        };
    }

    const adjacentTiles = getAdjacentTiles(board, tile);

    return adjacentTiles.reduce<ConnectedTilesResult>(
        (acc, curr) => {
            const { connectedTiles, visited } = getConnectedTiles(
                board,
                curr,
                colorToMatch,
                acc.visited
            );

            return {
                connectedTiles: acc.connectedTiles.concat(connectedTiles),
                visited,
            };
        },
        {
            connectedTiles: [tile],
            visited: updatedVisited,
        }
    );
};

export const selectColor = (board: Board, color: Color) => {
    const updatedBoard = deepCopy(board);

    const originTile = updatedBoard.tiles[0][0];
    const { connectedTiles } = getConnectedTiles(
        updatedBoard,
        originTile,
        originTile.color,
        {}
    );

    connectedTiles.forEach((tile) => {
        tile.color = color;
    });

    return updatedBoard;
};

export const getNumberOfTilesConnectedToOrigin = (board: Board) => {
    const originTile = board.tiles[0][0];

    return getConnectedTiles(board, originTile, originTile.color, {})
        .connectedTiles.length;
};

export const gameWon = (board: Board) => {
    return (
        getNumberOfTilesConnectedToOrigin(board) ===
        Math.pow(board.tiles[0].length, 2)
    );
};
