import React from "react";
import ReactDOM from "react-dom";
const fname ="Anupam";
const lname ="Rai";

// ReactDOM.render(<h1>Hello {name}!</h1>, document.getElementById('root'));
ReactDOM.render(
  <h1>Hello {fname+ "" +lname}!</h1>,
  // <h1>Hello {fname}!</h1>,
  // <h1>Hello {`${fname} ${lname}`}!</h1>, //es6
  // <h1>Hello {fname} {lname}!</h1>,
   document.getElementById('root')
 );
