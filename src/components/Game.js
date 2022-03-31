import React, { useState, useEffect } from "react";

// -> Load 10 Random Cards Initiated to Blank Colored Square
// -> Click on Card to Load Image
// -> Type Your Guess for the Character Name
// -> Click 'Final Answer' Button
// -> Show Result (Correct or Wrong)
// -> Adjust Game Score
// -> Card Should Show Image Side When Continuing

const Game = (props) => {
  const [board, setBoard] = useState([]);
  const totalSquares = props.characters.length;

  // Let's find a random number!! Weeee
  const num = (totalSquares) => {
    return Math.round(Math.random() * totalSquares);
  };

  useEffect(() => {
    const ids = [];
    while (ids.length < 10) {
      ids.push(
        `https://hp-api.herokuapp.com/api/characters/${num(totalSquares)}`
      );
    }
    setBoard(ids);
  }, []);
  console.log(board);
  return <main id="game-board" className="game-board"></main>;
};

export default Game;
