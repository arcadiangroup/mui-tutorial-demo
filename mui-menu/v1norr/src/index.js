import React from "react";
import { render } from "react-dom";
import Demo from "./TwoSimpleMenus";
//import Demo from "./MenuAppBar3";

const rootElement = document.querySelector("#root");
if (rootElement) {
  render(<Demo />, rootElement);
}
