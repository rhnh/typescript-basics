import * as utils from "./app/utils";

const result = document.getElementById("result");
const harmonicSeriesBtn = document.getElementById("harmonic-series");
const leibnizSeriesBtn = document.getElementById("leibniz-series");
const sumOfOddsBtn = document.getElementById("sum-of-odds");

harmonicSeriesBtn.addEventListener("click", () => {
  const value = prompt("Please Enter a number");
  let res: number = utils.harmonicSeries(+value);
  result.innerHTML = res.toString();
});
sumOfOddsBtn.addEventListener("click", () => {
  const value = prompt("Please Enter a number");
  let res: number = utils.sumOfOddNumbers(+value);
  result.innerHTML = res.toString();
});
leibnizSeriesBtn.addEventListener("click", () => {
  const value = prompt("Please Enter a number");
  let res: number = utils.LeibnizSeries(+value);
  result.innerHTML = res.toString();
});
