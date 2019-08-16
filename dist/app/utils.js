"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//utils
function isOdd(value) {
    return isEven(value) ? false : true;
}
exports.isOdd = isOdd;
//
function isEven(value) {
    return value % 2 === 0;
}
exports.isEven = isEven;
/**
 * O(sqrt(n))
 * @param value number
 */
function isPrime(value) {
    if (value <= 1)
        return false;
    if (value <= 3)
        return true; // 2 or 3 => true
    if (value % 2 === 0 || value % 3 === 0) {
        // can be divided by 2 or 3 => false
        return false;
    }
    for (var i = 5; i * i <= value; i = i + 6) {
        //value >= 25 ?
        if (value % i === 0 || value % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
exports.isPrime = isPrime;
//# sourceMappingURL=utils.js.map