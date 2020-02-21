,import React from "react";
import ReactDOM from "react-dom";
import pi,{doublepi, triplepi}  from "./Es6/Math.js";
// import * is pi from "./Es6/Math.js";

ReactDOM.render{
  // <ul>
  // <li>{pi.default}</li>
  // <li>{pi.doublepi()}</li>
  // <li>{pi.triplepi()}</li>
  // </ul>,
  <ul>
  <li>{pi}</li>
  <li>{doublepi()}</li>
  <li>{triplepi()}</li>
  </ul>,
  document.getElementById("root")
}
