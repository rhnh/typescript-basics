"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modalForm = document.getElementById("input-form");
var modal = document.getElementById("modal");
var close = document.getElementById("close");
var cancel = document.getElementById("cancel");
function addElement(elementId, elementType, parentElement) {
    var child = document.createElement(elementType);
    child.className = "form-name";
    child.setAttribute("id", elementId);
    parentElement.appendChild(child);
    return parentElement;
}
function addMultipleElement(numberOfElements, elementType, elementId, parentElement) {
    var htmlElements = null;
    for (var i = 0; i < numberOfElements; i++) {
        var id = i + 1;
        htmlElements = addElement(elementId + id, elementType, parentElement);
    }
    return htmlElements;
}
exports.addMultipleElement = addMultipleElement;
function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
exports.removeAllChildren = removeAllChildren;
function addParagraph(elementId, desc) {
    var element = document.getElementById(elementId);
    element.innerText = desc;
    return element;
}
exports.addParagraph = addParagraph;
function getInputValues(modalForm) {
    var values = [];
    for (var i = 0; i < modalForm.length; i++) {
        if (modalForm[i].nodeName === "INPUT") {
            values.push(modalForm[i].value);
        }
    }
    return values;
}
exports.getInputValues = getInputValues;
close.addEventListener("click", function () {
    modal.style.display = "none";
    removeAllChildren(modalForm);
});
cancel.addEventListener("click", function () {
    modal.style.display = "none";
    removeAllChildren(modalForm);
});
function displayModal(callBack, desc, numberInputBox) {
    var description = document.getElementById("description");
    var CalculateBtn = document.getElementById("calculate"), result = document.createElement("p");
    result.setAttribute("id", "result");
    addMultipleElement(numberInputBox, "INPUT", "formName", modalForm);
    addParagraph("description", " Harmonic Series ");
    description.innerText = desc;
    CalculateBtn.addEventListener("click", function () {
        var values = getInputValues(modalForm);
        var v = callBack.apply(void 0, values);
        if (Array.isArray(v)) {
            v = v.join();
        }
        result.innerText = v;
    });
    modalForm.appendChild(result);
    modal.style.display = "block";
}
exports.displayModal = displayModal;
function createButton(id, txt) {
    var b = document.createElement("button");
    b.setAttribute("id", "" + id);
    b.innerHTML = txt;
    var div = document.createElement("div");
    div.appendChild(b);
    var buttonClass = document.getElementById("fButton");
    buttonClass.appendChild(div);
    return b;
}
exports.createButton = createButton;
//# sourceMappingURL=render.js.map