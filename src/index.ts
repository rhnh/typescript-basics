import * as utils from "./app/utils";

const harmonicSeriesBtn = document.getElementById("harmonic-series");
const leibnizSeriesBtn = document.getElementById("leibniz-series");
const sumOfOddsBtn = document.getElementById("sum-of-odds");
const isPrime = document.getElementById("is-prime");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const cancel = document.getElementById("cancel");
const primeFactor = document.getElementById("prime-factor");
const modalForm = document.getElementById("input-form");

harmonicSeriesBtn.addEventListener("click", () => {
  displayModal(utils.harmonicSeries);
});

leibnizSeriesBtn.addEventListener("click", () => {
  displayModal(utils.LeibnizSeries);
});

isPrime.addEventListener("click", () => {
  displayModal(utils.isPrime);
});

primeFactor.addEventListener("click", () => {
  displayModal(utils.primeFactors);
});

sumOfOddsBtn.addEventListener("click", () => {
  displayModal(utils.sumOfOddNumbers);
});
close.addEventListener("click", () => {
  modal.style.display = "none";
  utils.removeAllChildren(modalForm);
});

cancel.addEventListener("click", () => {
  modal.style.display = "none";
  utils.removeAllChildren(modalForm);
});
function displayModal(callBack) {
  modal.style.display = "block";
  let calculate = document.getElementById("calculate");
  let inputBox = utils.addInputBox("This is an inputBox");
  modalForm.appendChild(inputBox);
  utils.addParagraph("description", " Harmonic Series ");
  let parentDiv = document.getElementById("formName").parentNode;
  modal.style.display = "block";
  let result = document.createElement("p");
  calculate.addEventListener("click", () => {
    result.innerText = callBack(+inputBox.value).toString();
  });
  parentDiv.insertBefore(result, inputBox);
}
