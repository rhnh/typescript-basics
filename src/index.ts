import { primeFactors } from "./app/primeFactors";
import { JWallisPI } from "./app/JWallisPI";
import { harmonicSeries } from "./app/harmonicSeries";
import { sumOfOddNumbers } from "./app/oddNumberSum";
import { exponentialSeries } from "./app/expo_series_sum";
import { LeibnizSeries } from "./app/LeibnizSeries";
import { numberOfHandShake } from "./app/numberOfHandShake";
import { fib } from "./app/fib";
import "./style.css";
import * as funcs from "./app/utils";
import * as render from "./app/render";
import { mjb } from "./app/marie_jose_bertin";
import { flip } from "./app/flip";
import { taylorSeriesHorner } from "./app/taylor-series-horner";
//#################################################
//Handshake
const flipBtn = render.createButton("flip-number", "Flip The Number");
flipBtn.addEventListener("click", () => {
  const desc = "Give a number to flip it. Example 123 would be 321!";
  const numberOfInputBox = 1;
  render.displayModal(flip, desc, numberOfInputBox);
});

//#################################################
//Handshake
const handshakeBtn = render.createButton("handshake", "HandShake");
handshakeBtn.addEventListener("click", () => {
  const desc =
    "In a party n person shakes with each others, how many hand shakes were made in total";
  const numberOfInputBox = 1;
  render.displayModal(numberOfHandShake, desc, numberOfInputBox);
});

//#################################################
//Satz 153
const mjbBtn = render.createButton("153", "153");
mjbBtn.addEventListener("click", () => {
  const desc = ` The given number has to be dividable by 3, the following number would be the sum of \n its digits \n example for 33: \n   54,189,1242,81,513,153,153 `;
  const numberOfInputBox = 1;
  render.displayModal(mjb, desc, numberOfInputBox);
});

//#################################################
//Harmonic Series
const harmonicSeriesBtn = render.createButton(
  "harmonic-series",
  "Harmonic Series Sum"
);
harmonicSeriesBtn.addEventListener("click", () => {
  const desc = "1 + 1/2+ 1/3 + 1/4";
  const numberOfInputBox = 1;
  render.displayModal(harmonicSeries, desc, numberOfInputBox);
});

//#################################################
//Leibniz Series
const leibnizSeriesBtn = render.createButton(
  "leibniz-series",
  "Leibniz Series's Sum"
);
leibnizSeriesBtn.addEventListener("click", () => {
  const desc = "Leibniz Series: π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...";
  const numberOfInputBox = 1;
  render.displayModal(LeibnizSeries, desc, numberOfInputBox);
});
let windowVar;
//#################################################
//Sum of Odd Series
const sumOfOddsBtn = render.createButton("sum-of-odds", "Sum Odd Numbers");
sumOfOddsBtn.addEventListener("click", () => {
  const desc = "Sums odd numbers";
  const numberOfInputBox = 1;
  render.displayModal(sumOfOddNumbers, desc, numberOfInputBox);
});

//#################################################
//Is Prime
const isPrime = render.createButton("is-prime", "IsPrime");
isPrime.addEventListener("click", () => {
  const desc = "Is the given number a prime number ?";
  const numberOfInputBox = 1;
  render.displayModal(funcs.isPrime, desc, numberOfInputBox);
});

//#################################################
//Prime Factor
const primeFactor = render.createButton("prime-factor", "Prime factors");
primeFactor.addEventListener("click", () => {
  const desc = "Shows prime factor of a number";
  const numberOfInputBox = 1;
  render.displayModal(primeFactors, desc, numberOfInputBox);
});

//#################################################
//exponential Series
const exponential = render.createButton(
  "exponential",
  "Exponential series's sum"
);
exponential.addEventListener("click", () => {
  const desc =
    " e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!";
  const numberOfInputBox = 2;
  render.displayModal(exponentialSeries, desc, numberOfInputBox);
});

//#################################################
//John Wallis
const JWallis = render.createButton("john-wallis", "PI:John Wallis Method");
JWallis.addEventListener("click", () => {
  const desc = "pi/2 = 2/1 * 2/3 * 4/3 * 4/5 * 6/5 * 8/7* 8/9 +, .. ";
  const numberOfInputBox = 1;
  render.displayModal(JWallisPI, desc, numberOfInputBox);
});

//#################################################
//John Wallis
const memoizedFibBtn = render.createButton("memoized-fib", "Fibonacci");
memoizedFibBtn.addEventListener("click", () => {
  const desc = "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...";
  const numberOfInputBox = 1;
  render.displayModal(fib, desc, numberOfInputBox);
});

//#################################################
//exponential Series
const taylor = render.createButton(
  "exponential-taylor",
  "Taylor Exponential series horner rules"
);
taylor.addEventListener("click", () => {
  const desc =
    " e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!";
  const numberOfInputBox = 2;
  render.displayModal(taylorSeriesHorner, desc, numberOfInputBox);
});
