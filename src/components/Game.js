import React, { useState } from "react";


import Header from "./Header";
import Gameboard from "./Gameboard";
import { level1, level2 } from "../Constants";


const Game = () => {

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, sethighScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const [currentLevel, setCurrentLevel] = useState(level1);

    const levelsArray = [level1, level2];

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
        setClickedCards(clickedCards => [...clickedCards, newCard]);
    }

    const handleCurrentLevel = () => {
        let index = levelsArray.indexOf(currentLevel);
        if (index >= 0 && index < levelsArray.length - 1)
            setCurrentLevel(levelsArray[index + 1]);

    }

    const gameLogic = (cardClicked, highestScore) => {


        if (!clickedCards.includes(cardClicked)) {
            addCard(cardClicked);
            handleCurrentScore();


            if (clickedCards.length + 1 === highestScore) {
                console.log("winner")

                //Winner, next level etc
                resetGame();
                handleCurrentLevel();
            }

        } else {
            handleHighScore();
            resetGame();
        }


    }




    return (
        <div>
            <Header currentScore={currentScore} highScore={highScore} />
            <Gameboard key={currentLevel.highestScore} gameLogic={gameLogic} currentScore={currentScore} highScore={highScore} level={currentLevel} />
        </div>
    );
}

export default Game;