import { createElement } from "./elements.js";
import { createInputComponent } from "./inputComponent.js";

export function createButtonComponent(type, onClick) {
  const button = createElement("button", {
    /*     onclick: calc("add", numberOne, numberTwo),
     */
    className: "button",
    textContent: type,
    onclick: onClick,
  });

  return button;
}

/* function calc(callback, numberOne, numberTwo) {
  return callback(numberOne, numberTwo);
}

 */
