"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.gameWon = exports.getNumberOfTilesConnectedToOrigin = exports.selectColor = exports.getConnectedTiles = exports.getAdjacentTiles = void 0;
var objects_1 = require("./utils/objects");
var INDICES_DELTA_FOR_ADJACENT_TILES = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
];
exports.getAdjacentTiles = function (board, tile) {
    return INDICES_DELTA_FOR_ADJACENT_TILES.map(function (indicesToAdd) {
        var row = board.tiles[tile.row + indicesToAdd[0]];
        if (!row) {
            return undefined;
        }
        return row[tile.column + indicesToAdd[1]];
    }).filter(function (t) { return !!t; });
};
var getVisitedKey = function (tile) { return tile.row + "," + tile.column; };
exports.getConnectedTiles = function (board, tile, colorToMatch, visited) {
    var _a;
    var visitedKey = getVisitedKey(tile);
    if (visited[visitedKey]) {
        return {
            connectedTiles: [],
            visited: visited
        };
    }
    var updatedVisited = __assign(__assign({}, visited), (_a = {}, _a[visitedKey] = true, _a));
    if (tile.color !== colorToMatch) {
        return {
            connectedTiles: [],
            visited: updatedVisited
        };
    }
    var adjacentTiles = exports.getAdjacentTiles(board, tile);
    return adjacentTiles.reduce(function (acc, curr) {
        var _a = exports.getConnectedTiles(board, curr, colorToMatch, acc.visited), connectedTiles = _a.connectedTiles, visited = _a.visited;
        return {
            connectedTiles: acc.connectedTiles.concat(connectedTiles),
            visited: visited
        };
    }, {
        connectedTiles: [tile],
        visited: updatedVisited
    });
};
exports.selectColor = function (board, color) {
    var updatedBoard = objects_1.deepCopy(board);
    var originTile = updatedBoard.tiles[0][0];
    var connectedTiles = exports.getConnectedTiles(updatedBoard, originTile, originTile.color, {}).connectedTiles;
    connectedTiles.forEach(function (tile) {
        tile.color = color;
    });
    return updatedBoard;
};
exports.getNumberOfTilesConnectedToOrigin = function (board) {
    var originTile = board.tiles[0][0];
    return exports.getConnectedTiles(board, originTile, originTile.color, {})
        .connectedTiles.length;
};
exports.gameWon = function (board) {
    return (exports.getNumberOfTilesConnectedToOrigin(board) ===
        Math.pow(board.tiles[0].length, 2));
};
