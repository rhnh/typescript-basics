"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var primeFactors_1 = require("./app/primeFactors");
var JWallisPI_1 = require("./app/JWallisPI");
var harmonicSeries_1 = require("./app/harmonicSeries");
var oddNumberSum_1 = require("./app/oddNumberSum");
var expo_series_sum_1 = require("./app/expo_series_sum");
var LeibnizSeries_1 = require("./app/LeibnizSeries");
var numberOfHandShake_1 = require("./app/numberOfHandShake");
require("./style.css");
var funcs = require("./app/utils");
var render = require("./app/render");
var marie_jose_bertin_1 = require("./app/marie_jose_bertin");
//#################################################
//Handshake
var handshakeBtn = render.createButton("handshake", "HandShake");
handshakeBtn.addEventListener("click", function () {
    var desc = "This is a desc";
    var numberOfInputBox = 1;
    render.displayModal(numberOfHandShake_1.numberOfHandShake, desc, numberOfInputBox);
});
//#################################################
//Satz 153
var mjbBtn = render.createButton("153", "153");
mjbBtn.addEventListener("click", function () {
    var desc = " The given number has to be dividable by 3, the following number would be the sum of \n its digits \n example for 33: \n   54,189,1242,81,513,153,153 ";
    var numberOfInputBox = 1;
    render.displayModal(marie_jose_bertin_1.mjb, desc, numberOfInputBox);
});
//#################################################
//Harmonic Series
var harmonicSeriesBtn = render.createButton("harmonic-series", "Harmonic Series Sum");
harmonicSeriesBtn.addEventListener("click", function () {
    var desc = "1 + 1/2+ 1/3 + 1/4";
    var numberOfInputBox = 1;
    render.displayModal(harmonicSeries_1.harmonicSeries, desc, numberOfInputBox);
});
//#################################################
//Leibniz Series
var leibnizSeriesBtn = render.createButton("leibniz-series", "Leibniz Series's Sum");
leibnizSeriesBtn.addEventListener("click", function () {
    var desc = "Leibniz Series: π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...";
    var numberOfInputBox = 1;
    render.displayModal(LeibnizSeries_1.LeibnizSeries, desc, numberOfInputBox);
});
var windowVar;
//#################################################
//Sum of Odd Series
var sumOfOddsBtn = render.createButton("sum-of-odds", "Sum Odd Numbers");
sumOfOddsBtn.addEventListener("click", function () {
    var desc = "Sums odd numbers";
    var numberOfInputBox = 1;
    render.displayModal(oddNumberSum_1.sumOfOddNumbers, desc, numberOfInputBox);
});
//#################################################
//Is Prime
var isPrime = render.createButton("is-prime", "IsPrime");
isPrime.addEventListener("click", function () {
    var desc = "Is the given number a prime number ?";
    var numberOfInputBox = 1;
    render.displayModal(funcs.isPrime, desc, numberOfInputBox);
});
//#################################################
//Prime Factor
var primeFactor = render.createButton("prime-factor", "Prime factors");
primeFactor.addEventListener("click", function () {
    var desc = "Shows prime factor of a number";
    var numberOfInputBox = 1;
    render.displayModal(primeFactors_1.primeFactors, desc, numberOfInputBox);
});
//#################################################
//exponential Series
var exponential = render.createButton("exponential", "Exponential series's sum");
exponential.addEventListener("click", function () {
    var desc = " e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!";
    var numberOfInputBox = 2;
    render.displayModal(expo_series_sum_1.exponentialSeries, desc, numberOfInputBox);
});
//#################################################
//John Wallis
var JWallis = render.createButton("john-wallis", "PI:John Wallis Method");
JWallis.addEventListener("click", function () {
    var desc = "pi/2 = 2/1 * 2/3 * 4/3 * 4/5 * 6/5 * 8/7* 8/9 +, .. ";
    var numberOfInputBox = 1;
    render.displayModal(JWallisPI_1.JWallisPI, desc, numberOfInputBox);
});
//# sourceMappingURL=index.js.map