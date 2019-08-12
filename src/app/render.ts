const modalForm = document.getElementById("input-form");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const cancel = document.getElementById("cancel");

function addElement(
  elementId: string,
  elementType: string,
  parentElement: HTMLElement
): HTMLElement {
  const child = document.createElement(elementType);
  child.className = "form-name";
  child.setAttribute("id", elementId);
  parentElement.appendChild(child);
  return parentElement;
}

export function addMultipleElement(
  numberOfElements: number,
  elementType: string,
  elementId,
  parentElement: HTMLElement
): HTMLElement {
  let htmlElements: HTMLElement = null;
  for (let i = 0; i < numberOfElements; i++) {
    let id = i + 1;
    htmlElements = addElement(elementId + id, elementType, parentElement);
  }
  return htmlElements;
}

export function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function addParagraph(
  elementId: string,
  desc: string
): HTMLParagraphElement {
  let element = <HTMLParagraphElement>document.getElementById(elementId);
  element.innerText = desc;
  return element;
}

export function getInputValues(modalForm) {
  let values = [];
  for (let i = 0; i < modalForm.length; i++) {
    if (modalForm[i].nodeName === "INPUT") {
      values.push(modalForm[i].value);
    }
  }
  return values;
}

close.addEventListener("click", () => {
  modal.style.display = "none";
  removeAllChildren(modalForm);
});
cancel.addEventListener("click", () => {
  modal.style.display = "none";
  removeAllChildren(modalForm);
});

export function displayModal(callBack, desc, numberInputBox) {
  const description = document.getElementById("description");

  let CalculateBtn = document.getElementById("calculate"),
    result = document.createElement("p");
  result.setAttribute("id", "result");
  addMultipleElement(numberInputBox, "INPUT", "formName", modalForm);
  addParagraph("description", " Harmonic Series ");
  description.innerText = desc;
  CalculateBtn.addEventListener("click", () => {
    let values = getInputValues(modalForm);
    let v = callBack(...values);
    if (Array.isArray(v)) {
      v = v.join();
    }
    result.innerText = v;
  });
  modalForm.appendChild(result);

  modal.style.display = "block";
}
export function createButton(id, txt) {
  let b: HTMLButtonElement = document.createElement("button");
  b.setAttribute("id", `${id}`);
  b.innerHTML = txt;

  let div: HTMLElement = document.createElement("div");
  div.appendChild(b);
  let buttonClass = document.getElementById("fButton");
  buttonClass.appendChild(div);
  return b;
}
