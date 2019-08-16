"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoized = function (fn) {
    var table = {};
    return function (arg) { return table[arg] || fn(arg); };
};
exports.factorial = function (num) {
    return num < 2 ? 1 : +num * exports.factorial(+num - 1);
};
exports.memoizedFactorial = exports.memoized(exports.factorial);
//# sourceMappingURL=memoizedFactorial.js.map