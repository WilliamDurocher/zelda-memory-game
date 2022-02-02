import React, { useState } from "react";


import Header from "./Header";
import Gameboard from "./Gameboard";

const Game = () => {

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, sethighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const handleCurrentScore = () => {
      setCurrentScore(currentScore + 1);
  }

  const handleHighScore = () => {
      sethighScore(currentScore);
  }

  const resetGame = () => {
      setCurrentScore(0);
      setClickedCards([]);
  }

  const addCard = (newCard) => {
      setClickedCards((cardsArray) => [...cardsArray] + newCard);
  }

  const gameLogic = (cardClicked) => {
      console.log(cardClicked)
      if (!clickedCards.includes(cardClicked)){
        addCard(cardClicked);
        handleCurrentScore();
      }else{
        handleHighScore();
        resetGame();
      }
  }




    return (
        <div>
            <Header currentScore={currentScore} highScore={highScore} />
            <Gameboard gameLogic={gameLogic} currentScore={currentScore} highScore={highScore} />
        </div>
    );
}

export default Game;