import { createButtonComponent } from "./lib/calcComponent.js";
import { createInputComponent } from "./lib/inputComponent.js";
import { createTitleComponent } from "./lib/titleComponent.js";
import { createElement } from "./lib/elements.js";

// Declare a function to create the elements and logic inside the #app element
function createApp() {
  // Get a reference to the <div id="app"></div> element
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();

  appElement.append(titleComponent);

  //Call the createInputComponent function to create 2 inputs for the numbers
  const numberOne = createInputComponent("Number 1");
  const numberTwo = createInputComponent("Number 2");
  const inputDiv = createElement("div", { className: "input" }, [
    numberOne,
    numberTwo,
  ]);
  appElement.append(inputDiv);

  // Create buttons and use callback to give calculate function
  const calcAddition = createButtonComponent("+", function () {
    alert(Number(numberOne.value) + Number(numberTwo.value));
  });
  const calcSubtraction = createButtonComponent("-", function () {
    alert(Number(numberOne.value) - Number(numberTwo.value));
  });
  const calcMultiply = createButtonComponent("*", function () {
    alert(Number(numberOne.value) * Number(numberTwo.value));
  });
  const calcDivision = createButtonComponent("/", function () {
    alert(Number(numberOne.value) / Number(numberTwo.value));
  });
  const calcDiv = createElement("div", { className: "calcDiv" }, [
    calcAddition,
    calcSubtraction,
    calcMultiply,
    calcDivision,
  ]);
  appElement.append(calcDiv);
}

// Run the createApp function
createApp();
