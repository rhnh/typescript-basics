"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = function (x) {
    var emptyArray = [];
    flipRecursion(x, emptyArray);
    return emptyArray;
};
var flipRecursion = function (x, r) {
    if (x < 10) {
        return 0;
    }
    x = Math.floor(flipRecursion(x / 10, r));
    r.push(x % 10);
    return x;
};
//# sourceMappingURL=flip.js.map