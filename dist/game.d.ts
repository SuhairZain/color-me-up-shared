import { Board, Tile, Color } from "./types";
export declare const getAdjacentTiles: (board: Board, tile: Tile) => Tile[];
declare type Visited = {
    [key in string]: boolean;
};
declare type ConnectedTilesResult = {
    connectedTiles: Tile[];
    visited: Visited;
};
export declare const getConnectedTiles: (board: Board, tile: Tile, colorToMatch: Color, visited: Visited) => ConnectedTilesResult;
export declare const selectColor: (board: Board, color: Color) => Board;
export declare const getNumberOfTilesConnectedToOrigin: (board: Board) => number;
export declare const gameWon: (board: Board) => boolean;
export {};
