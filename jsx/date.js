import React from "react";
import ReactDOM from "react-dom";

const name = "Anupam";
const currentDate = new Date();
// const year = currentDate.getFullYear();

ReactDOM.render{
  <div>
   <p>created by {name}</p>
   // <p>copyright {year}</p>
   <p>copyright {currentDate.getFullYear()}</p>
  </div>,
  document.getElementById('root')
}
