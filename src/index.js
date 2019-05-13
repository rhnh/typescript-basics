import { harmonicSeries } from "./app/harmonic-series";
import { SumOfOddNumbers } from "./app/sumOfOds";
import { LeibnizSeries } from "./app/leibnizSeries";

const harmonic = document.getElementById("harmonic");
harmonic.addEventListener("click", harmonicSeries);
harmonic.addEventListener("click", () => {
  harmonic.style.display = "none";
});

const sumBtn = document.getElementById("sum-of-odd-number");
sumBtn.addEventListener("click", SumOfOddNumbers);
sumBtn.addEventListener("click", () => {
  sumBtn.style.display = "none";
});

const leibnizBtn = document.getElementById("leibniz-series");
leibnizBtn.addEventListener("click", LeibnizSeries);
leibnizBtn.addEventListener("click", () => {
  leibnizBtn.style.display = "none";
});
