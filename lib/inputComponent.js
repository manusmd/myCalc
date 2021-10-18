import { createElement } from "./elements.js";

export function createInputComponent(placeholder) {
  const number = createElement("input", {
    className: "input",
    type: "number",
    placeholder: placeholder,
  });
  return number;
}
