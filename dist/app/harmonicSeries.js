"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.harmonicSeries = function (value) {
    return Array.from(Array(+value).keys()).reduce(function (a, c) { return a + 1 / (c + 1); }) + 1;
};
//# sourceMappingURL=harmonicSeries.js.map