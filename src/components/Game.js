import React, { useState } from "react";


import Header from "./Header";
import uniqid from "uniqid";
import Gameboard from "./Gameboard";
import EndModal from "./EndModal";
import { level1, level2 } from "../Constants";

//TODO finish levels, add style to header, add level picker
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

    const levelSelector = (levelIndex) => {
        setCurrentLevel(levelsArray[levelIndex]);
        resetGame();
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

                //here it is better to use levelsArray[levelsArray.length - 1] because of compatibility
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
            <Header key={uniqid()} currentScore={currentScore} highScore={highScore} level={currentLevel.level} levelName={currentLevel.name} levelsArray={levelsArray} levelSelector={levelSelector} />
            <Gameboard key={currentLevel.level} gameLogic={gameLogic} currentScore={currentScore} highScore={highScore} level={currentLevel} />
            <EndModal gameStatus={endGameStatus} show={showModal} nextLevel={changeLevel} restartLevel={restartLevel} restartGame={restartGame} />
        </>
    );
}

export default Game;