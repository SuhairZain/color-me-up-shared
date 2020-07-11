"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.deepCopy = exports.extend = exports.copy = void 0;
/** Creates a shallow copy of an object, shortcut to using Object.assign with an empty object as first param */
function copy(original) {
    return Object.assign({}, original);
}
exports.copy = copy;
/** Creates a shallow copy of an object and applies updates on the copy */
function extend(source) {
    var updates = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        updates[_i - 1] = arguments[_i];
    }
    return Object.assign.apply(Object, __spreadArrays([copy(source)], updates));
}
exports.extend = extend;
function deepCopy(original) {
    if (typeof original !== "object" || original === null) {
        return original;
    }
    if (Array.isArray(original)) {
        return original.map(function (v) { return deepCopy(v); });
    }
    var copyToUpdate = copy(original);
    Object.keys(copyToUpdate).forEach(function (k) {
        copyToUpdate[k] = deepCopy(copyToUpdate[k]);
    });
    return copyToUpdate;
}
exports.deepCopy = deepCopy;
