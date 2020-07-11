import { Board, Color } from "./types";
export declare const getMaximumPossibleConnections: (board: Board) => {
    color: Color;
    possibleConnectedTiles: number;
};
export declare const getColorWithMaximumPossibleConnections: (board: Board) => Color;
export declare const playGame: (board: Board) => Color[];
