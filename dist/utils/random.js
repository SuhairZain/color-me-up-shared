"use strict";
exports.__esModule = true;
exports.randomItem = void 0;
var lodash_es_1 = require("lodash-es");
function randomItem(items) {
    return items[lodash_es_1.random(items.length - 1)];
}
exports.randomItem = randomItem;
