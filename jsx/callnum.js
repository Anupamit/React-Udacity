import React from "react";
import ReactDOM from "react-dom";

const name ="Anupam Rai";
const num = 7;
ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>my lucky number is {num}</p>
    // <p>my lucky number is {Math.floor(Math.random() * 10)}</p>   //random number or fix number
    // <p>my lucky number is {
    //   if (name === "Anupam Rai"){
    //     return 7;
    //   }else if (name === "sandy") {
    //     return 12;
    //   }
    // }</p>

  </div>,
  document.getElementById('root')
);
