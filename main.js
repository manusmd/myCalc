import { createButtonComponent } from "./lib/calcComponent.js";
import { createInputComponent } from "./lib/inputComponent.js";
import { createTitleComponent } from "./lib/titleComponent.js";

// Declare a function to create the elements and logic inside the #app element
function createApp() {
  // Get a reference to the <div id="app"></div> element
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();

  appElement.append(titleComponent);

  const inputComponent = createInputComponent();

  appElement.append(inputComponent);

  const calcAdd = createButtonComponent("addButton", "+");
  const calcSub = createButtonComponent("subButton", "-");
  inputComponent.append(calcAdd, calcSub);
}

// Run the createApp function
createApp();
