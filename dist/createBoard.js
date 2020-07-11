"use strict";
exports.__esModule = true;
exports.createBoard = void 0;
var types_1 = require("./types");
var arrays_1 = require("./utils/arrays");
var random_1 = require("./utils/random");
exports.createBoard = function (size, numberOfColors) {
    if (numberOfColors > types_1.colors.length) {
        console.warn("Requested number of colors(" + numberOfColors + ") greater than preset colors(" + types_1.colors.length + ")");
    }
    // The colorsToUse array will be of length less than or equal to numberOfColors
    var colorsToUse = types_1.colors.slice(0, numberOfColors);
    var originColor = random_1.randomItem(colorsToUse);
    var nonOriginColors = colorsToUse.filter(function (c) { return c !== originColor; });
    return {
        tiles: arrays_1.createEmptyArray(size).map(function (_, i) {
            return arrays_1.createEmptyArray(size).map(function (_, j) {
                var isOrigin = i === 0 && j === 0;
                var isAdjacentToOrigin = (i === 1 && j === 0) || (i === 0 && j === 1);
                return {
                    color: isOrigin
                        ? originColor
                        : isAdjacentToOrigin
                            ? random_1.randomItem(nonOriginColors)
                            : random_1.randomItem(colorsToUse),
                    column: j,
                    row: i
                };
            });
        }),
        colors: colorsToUse
    };
};
