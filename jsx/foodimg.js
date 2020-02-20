import React from "react";
import ReactDOM from "react-dom";

const img ="https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className = "heading">My Favourite Food</h1>
    <ul>
     <li>Meet</li>
     <li>Rice</li>
    </ul>
    <img src = {img + "?grayscale"}/>
    <img className ="food-img"src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fasian-recipe.com%2Findia-meat-dishes-4695&psig=AOvVaw0oMBfDxgBjIs7iCZrkWPVk&ust=1582312509474000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi578zr4OcCFQAAAAAdAAAAABAK"/>
    <img className ="food-img"src="https://www.google.com/url?sa=i&url=https%3A%2F%2Frecipes.timesofindia.com%2Frecipes%2Fchicken-dum-biryani%2Frs54308405.cms&psig=AOvVaw3FEBe3HFjwVz-WrzFV3Suy&ust=1582312654529000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD135Hs4OcCFQAAAAAdAAAAABAD"/>
  </div>,
  document.getElementById("root")
);
