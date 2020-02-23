import React from "react";
import ReactDOM from "react-dom";
import {add,multiply,divide,subtract} from "calculator";
// import * as calculator from "calculator"

ReactDOM.render(
  // <ul>
  // <li>{calculator.add(5,5)}</li>
  // <li>{calculator.subtract(5,5)}</li>
  // <li>{calculator.multiply(5,5)}</li>
  // <li>{calculator.divide(5,5)}</li>
  // </ul>,
  <ul>
  <li>{add(5,5)}</li>
  <li>{subtract(5,5)}</li>
  <li>{multiply(5,5)}</li>
  <li>{divide(5,5)}</li>
  </ul>,
  document.getElementById("root")
);
