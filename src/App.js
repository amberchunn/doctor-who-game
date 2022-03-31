import React, { useState, useEffect } from "react";
// import { Route } from "react-router-dom";
import axios from "axios";
import Game from "./components/Game";
import "./styles.css";

const App = (props) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hp-api.herokuapp.com/api/characters`)
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error(`Oh no! ${error}`);
      });
  }, []);

  return (
    <div className="App">
      <Game characters={characters} />
    </div>
  );
};

export default App;
