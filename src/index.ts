import * as utils from "./app/utils";
import * as display from "./app/display";

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

harmonicSeriesBtn.addEventListener("click", () => {
  let desc = "1 + 1/2+ 1/3 + 1/4";
  displayModal(utils.harmonicSeries, true, desc);
});

leibnizSeriesBtn.addEventListener("click", () => {
  let desc = "Leibniz Series: π/4 = 1/1 - 1/3 + 1/5 - 1 /7 + 1/9 ± ...";
  displayModal(utils.LeibnizSeries, true, desc);
});

isPrime.addEventListener("click", () => {
  let desc = "Is the given number a prime number";
  displayModal(utils.isPrime, true, desc);
});

primeFactor.addEventListener("click", () => {
  let desc = "Shows prime factor of a number";
  displayModal(utils.primeFactors, true, desc);
});

sumOfOddsBtn.addEventListener("click", () => {
  let desc = "Sums odd numbers";
  displayModal(utils.sumOfOddNumbers, true, desc);
});
close.addEventListener("click", () => {
  modal.style.display = "none";
  display.removeAllChildren(modalForm);
});

cancel.addEventListener("click", () => {
  modal.style.display = "none";
  display.removeAllChildren(modalForm);
});
function displayModal(callBack, isNumericField, desc) {
  modal.style.display = "block";
  let calculate = document.getElementById("calculate");
  let inputBox = display.addInputBox("This is an inputBox", isNumericField);
  modalForm.appendChild(inputBox);
  display.addParagraph("description", " Harmonic Series ");
  let parentDiv = document.getElementById("formName").parentNode;
  modal.style.display = "block";
  let result = document.createElement("p");
  description.innerText = desc;
  calculate.addEventListener("click", () => {
    result.innerText = callBack(+inputBox.value).toString();
  });
  parentDiv.insertBefore(result, inputBox);
}
