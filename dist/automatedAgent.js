"use strict";
exports.__esModule = true;
exports.playGame = exports.getColorWithMaximumPossibleConnections = exports.getMaximumPossibleConnections = void 0;
var game_1 = require("./game");
exports.getMaximumPossibleConnections = function (board) {
    return board.colors
        .map(function (color) {
        return {
            color: color,
            possibleConnectedTiles: game_1.getNumberOfTilesConnectedToOrigin(game_1.selectColor(board, color))
        };
    })
        .sort(function (a, b) { return b.possibleConnectedTiles - a.possibleConnectedTiles; })[0];
};
exports.getColorWithMaximumPossibleConnections = function (board) {
    return exports.getMaximumPossibleConnections(board).color;
};
exports.playGame = function (board) {
    var colorsChosen = [];
    while (!game_1.gameWon(board)) {
        var colorWithMaximumConnectedTiles = exports.getColorWithMaximumPossibleConnections(board);
        board = game_1.selectColor(board, colorWithMaximumConnectedTiles);
        colorsChosen.push(colorWithMaximumConnectedTiles);
    }
    return colorsChosen;
};
