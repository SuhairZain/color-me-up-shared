"use strict";
exports.__esModule = true;
exports.createEmptyArray = void 0;
exports.createEmptyArray = function (length, fillWith) {
    if (fillWith === void 0) { fillWith = 0; }
    // The arrays created with the "new Array(length)" syntax
    // needs to be filled with some value before we can use them.
    return new Array(length).fill(fillWith);
};
