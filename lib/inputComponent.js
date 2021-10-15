import { createElement } from "./elements.js";

export function createInputComponent(numberOne, numberTwo) {
  numberOne = createElement("input", {
    type: "number",
    placeholder: "Number 1",
  });
  numberTwo = createElement("input", {
    type: "number",
    placeholder: "Number 2",
  });

  const input = createElement(
    "div",
    {
      className: "input",
    },
    [numberOne, numberTwo]
  );
  return input;
}
