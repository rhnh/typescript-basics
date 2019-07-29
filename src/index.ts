import * as funcs from "./app/utils";
import * as primeFactors from "./app/primeFactors";
import * as JWallisPI from "./app/JWallisPI";
import * as harmonicSeries from "./app/harmonicSeries";
import * as sumOfOddNumbers from "./app/oddNumberSum";
import * as exponentialSeries from "./app/expo_series_sum";
import * as LeibnizSeries from "./app/LeibnizSeries";
import * as render from "./app/render";
import "./style.css";

const harmonicSeriesBtn = document.getElementById("harmonic-series");
const leibnizSeriesBtn = document.getElementById("leibniz-series");
const sumOfOddsBtn = document.getElementById("sum-of-odds");
const isPrime = document.getElementById("is-prime");
const primeFactor = document.getElementById("prime-factor");
const exponential = document.getElementById("exponential");
const JWallis = document.getElementById("john-wallis");

harmonicSeriesBtn.addEventListener("click", () => {
  let desc = "1 + 1/2+ 1/3 + 1/4";
  render.displayModal(harmonicSeries.harmonicSeries, desc, 1);
});

leibnizSeriesBtn.addEventListener("click", () => {
  let desc = "Leibniz Series: π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...";
  render.displayModal(LeibnizSeries.LeibnizSeries, desc, 1);
});

isPrime.addEventListener("click", () => {
  let desc = "Is the given number a prime number ?";
  render.displayModal(funcs.isPrime, desc, 1);
});

primeFactor.addEventListener("click", () => {
  let desc = "Shows prime factor of a number";
  render.displayModal(primeFactors.primeFactors, desc, 1);
});

sumOfOddsBtn.addEventListener("click", () => {
  let desc = "Sums odd numbers";
  render.displayModal(sumOfOddNumbers.sumOfOddNumbers, desc, 1);
});
JWallis.addEventListener("click", () => {
  let desc = "pi/2 = 2/1 * 2/3 * 4/3 * 4/5 * 6/5 * 8/7* 8/9 +, .. ";
  render.displayModal(JWallisPI.JWallisPI, desc, 1);
});

exponential.addEventListener("click", () => {
  let desc =
    " e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!";
  render.displayModal(exponentialSeries.exponentialSeries, desc, 2);
});
