export function addInputBox(
  inputText: string,
  isNumericField
): HTMLInputElement {
  if (isNumericField) {
    let inputBox = document.createElement("input");
    inputBox.className = "form-name";
    inputBox.setAttribute("id", "formName");
    return inputBox;
  }
  let inputBox = document.createElement("input");
  inputBox.className = "form-name";
  inputBox.setAttribute("id", "formName");
  inputBox.placeholder = inputText;
  return inputBox;
}
export function addParagraph(
  elementId: string,
  desc: string
): HTMLParagraphElement {
  let element = <HTMLParagraphElement>document.getElementById(elementId);
  element.innerText = desc;
  return element;
}
export function removeAllChildren(element): void {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
