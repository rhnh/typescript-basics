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
  let inputBox = utils.addInputBox("This is an inputBox");
  let calculate = document.getElementById("calculate");

  modalForm.appendChild(inputBox);
  utils.addParagraph("description", " Harmonic Series ");
  let parentDiv = document.getElementById("formName").parentNode;
  calculate.addEventListener("click", () => {
    let result = document.createElement("p");
    result.innerText = utils.harmonicSeries(+inputBox.value).toString();
    parentDiv.insertBefore(result, inputBox);
  });

  modal.style.display = "block";
});

sumOfOddsBtn.addEventListener("click", () => {
  let inputBox = utils.addInputBox("This is an inputBox");
  let calculate = document.getElementById("calculate");

  modalForm.appendChild(inputBox);
  utils.addParagraph("description", " Harmonic Series ");
  let parentDiv = document.getElementById("formName").parentNode;
  calculate.addEventListener("click", () => {
    let result = document.createElement("p");
    result.innerText = utils.sumOfOddNumbers(+inputBox.value).toString();
    parentDiv.insertBefore(result, inputBox);
  });

  modal.style.display = "block";
});

leibnizSeriesBtn.addEventListener("click", () => {
  let inputBox = utils.addInputBox("This is an inputBox");
  let calculate = document.getElementById("calculate");

  modalForm.appendChild(inputBox);
  utils.addParagraph("description", " Harmonic Series ");
  let parentDiv = document.getElementById("formName").parentNode;
  calculate.addEventListener("click", () => {
    let result = document.createElement("p");
    result.innerText = utils.LeibnizSeries(+inputBox.value).toString();
    parentDiv.insertBefore(result, inputBox);
  });

  modal.style.display = "block";
});

isPrime.addEventListener("click", () => {
  let inputBox = utils.addInputBox("This is an inputBox");
  let calculate = document.getElementById("calculate");

  modalForm.appendChild(inputBox);
  utils.addParagraph("description", " Harmonic Series ");
  let parentDiv = document.getElementById("formName").parentNode;
  calculate.addEventListener("click", () => {
    let result = document.createElement("p");
    result.innerText = utils.isPrime(+inputBox.value).toString();
    parentDiv.insertBefore(result, inputBox);
  });

  modal.style.display = "block";
});

primeFactor.addEventListener("click", () => {
  let inputBox = utils.addInputBox("This is an inputBox");
  let calculate = document.getElementById("calculate");

  modalForm.appendChild(inputBox);
  utils.addParagraph("description", " Harmonic Series ");
  let parentDiv = document.getElementById("formName").parentNode;
  calculate.addEventListener("click", () => {
    let result = document.createElement("p");
    result.innerText = utils.primeFactors(+inputBox.value).toString();
    parentDiv.insertBefore(result, inputBox);
  });

  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
  utils.removeAllChildren(modalForm);
});

cancel.addEventListener("click", () => {
  modal.style.display = "none";
  utils.removeAllChildren(modalForm);
});
