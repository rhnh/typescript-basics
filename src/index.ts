import { primeFactors } from "./app/primeFactors";
import { JWallisPI } from "./app/JWallisPI";
import { harmonicSeries } from "./app/harmonicSeries";
import { sumOfOddNumbers } from "./app/oddNumberSum";
import { exponentialSeries } from "./app/expo_series_sum";
import { LeibnizSeries } from "./app/LeibnizSeries";
import { numberOfHandShake } from "./app/numberOfHandShake";
import "./style.css";
import * as funcs from "./app/utils";
import * as render from "./app/render";
import { mjb } from "./app/marie_jose_bertin";

let handshakeBtn = render.createButton("handshake", "HandShake");
let mjbBtn = render.createButton("154", "154");

let numberOfInputBox = 0;

const harmonicSeriesBtn = render.createButton(
  "harmonic-series",
  "Harmonic Series Sum"
);
const leibnizSeriesBtn = render.createButton(
  "leibniz-series",
  "Leibniz Series's Sum"
);
const sumOfOddsBtn = render.createButton("sum-of-odds", "Sum Odd Numbers");
const isPrime = render.createButton("is-prime", "Is it Prime Number");
const primeFactor = render.createButton("prime-factor", "Prime factors");

const exponential = render.createButton(
  "exponential",
  "Exponential series's sum"
);
const JWallis = render.createButton("john-wallis", "PI with John Wallis");

harmonicSeriesBtn.addEventListener("click", () => {
  let desc = "1 + 1/2+ 1/3 + 1/4";
  numberOfInputBox = 1;
  render.displayModal(harmonicSeries, desc, numberOfInputBox);
});

handshakeBtn.addEventListener("click", () => {
  let desc = "This is a desc";
  numberOfInputBox = 1;
  render.displayModal(numberOfHandShake, desc, numberOfInputBox);
});

leibnizSeriesBtn.addEventListener("click", () => {
  let desc = "Leibniz Series: π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...";
  numberOfInputBox = 1;
  render.displayModal(LeibnizSeries, desc, numberOfInputBox);
});

isPrime.addEventListener("click", () => {
  let desc = "Is the given number a prime number ?";
  numberOfInputBox = 1;
  render.displayModal(funcs.isPrime, desc, numberOfInputBox);
});

primeFactor.addEventListener("click", () => {
  let desc = "Shows prime factor of a number";
  numberOfInputBox = 1;
  render.displayModal(primeFactors, desc, numberOfInputBox);
});

sumOfOddsBtn.addEventListener("click", () => {
  let desc = "Sums odd numbers";
  numberOfInputBox = 1;
  render.displayModal(sumOfOddNumbers, desc, numberOfInputBox);
});
JWallis.addEventListener("click", () => {
  let desc = "pi/2 = 2/1 * 2/3 * 4/3 * 4/5 * 6/5 * 8/7* 8/9 +, .. ";
  numberOfInputBox = 1;
  render.displayModal(JWallisPI, desc, numberOfInputBox);
});
mjbBtn.addEventListener("click", () => {
  let desc = ` The given number has to be dividable by 3, the following number would be the sum of \n its digits \n example for 33: \n   54,189,1242,81,513,153,153 `;
  numberOfInputBox = 1;
  render.displayModal(mjb, desc, numberOfInputBox);
});

exponential.addEventListener("click", () => {
  let desc =
    " e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!";
  numberOfInputBox = 2;
  render.displayModal(exponentialSeries, desc, numberOfInputBox);
});
