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
