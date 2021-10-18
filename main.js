import { createButtonComponent } from "./lib/calcComponent.js";
import { createInputComponent } from "./lib/inputComponent.js";
import { createTitleComponent } from "./lib/titleComponent.js";

// Declare a function to create the elements and logic inside the #app element
function createApp() {
  // Get a reference to the <div id="app"></div> element
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();

  appElement.append(titleComponent);

  //Call the createInputComponent function to create 2 inputs for the numbers
  const numberOne = createInputComponent("Number 1");
  const numberTwo = createInputComponent("Number 2");
  appElement.append(numberOne, numberTwo);

  //
  const calcAdd = createButtonComponent("+", function () {
    alert(Number(numberOne.value) + Number(numberTwo.value));
  });
  const calcSub = createButtonComponent("-", function () {
    alert(Number(numberOne.value) - Number(numberTwo.value));
  });
  const calcMultiply = createButtonComponent("*", function () {
    alert(Number(numberOne.value) * Number(numberTwo.value));
  });
  const calcDiv = createButtonComponent("/", function () {
    alert(Number(numberOne.value) / Number(numberTwo.value));
  });
  appElement.append(calcAdd, calcSub, calcMultiply, calcDiv);
}

// Run the createApp function
createApp();
