import { createElement } from "./elements.js";
import { createInputComponent } from "./inputComponent.js";

export function createButtonComponent(name, type) {
  name = createElement("button", {
    /*     onclick: calc("add", numberOne, numberTwo),
     */
    className: "button",
    textContent: `${type}`,
  });

  return name;
}

/* function calc(callback, numberOne, numberTwo) {
  return callback(numberOne, numberTwo);
}

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function sub(numberOne, numberTwo) {
  return numberOne - numberTwo;
} */
