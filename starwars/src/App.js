import React, { useState, useEffect } from "react";
import "./App.css";
import StarWars from "./components/StarWars";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [Id, setId] = useState(1);
  const [star, setStar] = useState("");
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const fetchStars = Id => {
      fetch(`https://swapi.co/api/people/${Id}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setStar(data);
        });
    };
    fetchStars(Id);
  }, [Id]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWars star={star}></StarWars>
      <button onClick={e => setId(Id + 1)}> Next </button>
    </div>
  );
};

export default App;
