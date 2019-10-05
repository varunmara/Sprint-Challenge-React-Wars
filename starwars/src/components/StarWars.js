import React from "react";
import "./StarWars.css";
function StarWars(props) {
  return (
    <div>
      <div>
        <h4>StarWars - Characters</h4>
      </div>
      <div>
        <h1>{props.star.name}</h1>
        <h5>{props.star.skin_color}</h5>
      </div>
    </div>
  );
}

export default StarWars;
