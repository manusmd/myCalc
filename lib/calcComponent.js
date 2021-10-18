import { createElement } from "./elements.js";
import { createInputComponent } from "./inputComponent.js";

// Create a single button component
export function createButtonComponent(type, onClick) {
  const button = createElement("button", {
    className: "button",
    textContent: type,
    onclick: onClick,
  });

  return button;
}
