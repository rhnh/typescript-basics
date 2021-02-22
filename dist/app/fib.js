"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var memoized = function (fn) {
    var table = {};
    return function (arg) { return table[arg] || fn(arg); };
};
exports.fib = function (n) {
    return n <= 1 ? n : exports.fib(n - 2) + exports.fib(n - 1);
};
exports.memoizedFib = memoized(exports.fib);
//# sourceMappingURL=fib.js.map