import * as funcs from "./app/funcs";
import * as utils from "./app/utils";
import "./style.css";
const harmonicSeriesBtn = document.getElementById("harmonic-series");
const leibnizSeriesBtn = document.getElementById("leibniz-series");
const sumOfOddsBtn = document.getElementById("sum-of-odds");
const isPrime = document.getElementById("is-prime");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const cancel = document.getElementById("cancel");
const primeFactor = document.getElementById("prime-factor");
const modalForm = document.getElementById("input-form");
const description = document.getElementById("description");
const exponential = document.getElementById("exponential");
harmonicSeriesBtn.addEventListener("click", () => {
  let desc = "1 + 1/2+ 1/3 + 1/4";
  displayModal(funcs.harmonicSeries, desc, 1);
});

leibnizSeriesBtn.addEventListener("click", () => {
  let desc = "Leibniz Series: π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...";
  displayModal(funcs.LeibnizSeries, desc, 1);
});

isPrime.addEventListener("click", () => {
  let desc = "Is the given number a prime number ?";
  displayModal(funcs.isPrime, desc, 1);
});

primeFactor.addEventListener("click", () => {
  let desc = "Shows prime factor of a number";
  displayModal(funcs.primeFactors, desc, 1);
});

sumOfOddsBtn.addEventListener("click", () => {
  let desc = "Sums odd numbers";
  displayModal(funcs.sumOfOddNumbers, desc, 1);
});
close.addEventListener("click", () => {
  modal.style.display = "none";
  utils.removeAllChildren(modalForm);
});

exponential.addEventListener("click", () => {
  let desc =
    " e^x = 1 + x + (x^2)/2! + (x^3)/3! +( x^4)/4! + (x^5)/5! +... + (x^n)/n!";
  displayModal(funcs.exponentialSeries, desc, 2);
});
cancel.addEventListener("click", () => {
  modal.style.display = "none";
  utils.removeAllChildren(modalForm);
});

function displayModal(callBack, desc, numberInputBox) {
  let CalculateBtn = document.getElementById("calculate"),
    result = document.createElement("p");
  result.setAttribute("id", "result");
  utils.addMultipleElement(numberInputBox, "INPUT", "formName", modalForm);
  utils.addParagraph("description", " Harmonic Series ");
  description.innerText = desc;

  CalculateBtn.addEventListener("click", () => {
    let values = utils.getInputValues(modalForm);
    let v = callBack(...values);
    result.innerText = v;
  });
  modalForm.appendChild(result);

  modal.style.display = "block";
}
