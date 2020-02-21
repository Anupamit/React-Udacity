import React from "react";
import ReactDOM from "React-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle ={
  color: ""
}

if (currentTime <12){
  greeting = "Good Morning"
  customStyle.color = "red"
}
else if (currentTime <18) {
  greeting = "Good Afternoon"
  customStyle.color = "green"
}
else {
  greeting = "Good Night"
  customStyle.color = "yellow"
}

ReactDOM.rander(
  <h1 className="heading" style={customStyle}>{greeting}</h1>,
  document.getElementById('root')
);
