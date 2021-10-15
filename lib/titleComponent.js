import { createElement } from "./elements.js";

export function createTitleComponent() {
  const titleElement = createElement("h1", {
    className: "title",
    textContent: "MyCalc",
  });
  return titleElement;
}
