import { Board, Color } from "./types";
import {
    gameWon,
    selectColor,
    getNumberOfTilesConnectedToOrigin,
} from "./game";

export const getMaximumPossibleConnections = (board: Board) => {
    return board.colors
        .map((color) => {
            return {
                color,
                possibleConnectedTiles: getNumberOfTilesConnectedToOrigin(
                    selectColor(board, color)
                ),
            };
        })
        .sort((a, b) => b.possibleConnectedTiles - a.possibleConnectedTiles)[0];
};

export const getColorWithMaximumPossibleConnections = (board: Board) => {
    return getMaximumPossibleConnections(board).color;
};

export const playGame = (board: Board) => {
    const colorsChosen: Color[] = [];

    while (!gameWon(board)) {
        const colorWithMaximumConnectedTiles = getColorWithMaximumPossibleConnections(
            board
        );
        board = selectColor(board, colorWithMaximumConnectedTiles);
        colorsChosen.push(colorWithMaximumConnectedTiles);
    }

    return colorsChosen;
};
