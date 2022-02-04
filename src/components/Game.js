import React, { useState } from "react";


import Header from "./Header";
import Gameboard from "./Gameboard";
import EndModal from "./EndModal";
import { level1, level2 } from "../Constants";


const Game = () => {

    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, sethighScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const [currentLevel, setCurrentLevel] = useState(level1);
    const [showModal, setShowModal] = useState(false);
    const [endGameStatus, setEndGameStatus] = useState("");

    const levelsArray = [level1, level2];


    const handleCurrentScore = () => {
        setCurrentScore(currentScore + 1);
    }
    const handleHighScore = () => {
        sethighScore(currentScore);
    }

    const handleShowModal = () => {
        setShowModal(showModal => !showModal);
    }

    const resetGame = () => {
        setCurrentScore(0);
        setClickedCards([]);
    }

    const addCard = (newCard) => {
        setClickedCards(clickedCards => [...clickedCards, newCard]);
    }

    const handleEndGameStatus = (newStatus) => {
        setEndGameStatus(newStatus)
    }

    const handleCurrentLevel = () => {
        let index = levelsArray.indexOf(currentLevel);
        if (index >= 0 && index < levelsArray.length - 1) {
            setCurrentLevel(levelsArray[index + 1]);
        }
    }

    const changeLevel = () => {
        handleCurrentLevel();
        resetGame();
        handleShowModal();
    }

    const restartLevel = () => {
        resetGame();
        handleShowModal();
    }

    const restartGame = () => {
        setCurrentLevel(levelsArray[0]);
        resetGame();
        handleShowModal();

    }

    const gameLogic = (cardClicked, highestScore) => {


        if (!clickedCards.includes(cardClicked)) {
            addCard(cardClicked);
            handleCurrentScore();


            if (clickedCards.length + 1 === highestScore) {
                if (currentLevel.level === levelsArray.at(-1).level){
                    handleEndGameStatus("end");
                }else{
                    handleEndGameStatus("winner");
                }
                handleShowModal();
            }

        } else {

            handleHighScore();
            handleEndGameStatus("loser");
            handleShowModal();
        }
    }

    return (
        <>
            <Header currentScore={currentScore} highScore={highScore} />
            <Gameboard key={currentLevel.highestScore} gameLogic={gameLogic} currentScore={currentScore} highScore={highScore} level={currentLevel} />
            <EndModal gameStatus={endGameStatus} show={showModal} nextLevel={changeLevel} restartLevel={restartLevel} restartGame={restartGame} />
        </>
    );
}

export default Game;