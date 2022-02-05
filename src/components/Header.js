import React, { useState } from "react";
import LevelSelectModal from "./LevelSelectModal"
import logo from "../images/logo.png"

const Header = (props) => {

    const { currentScore, highScore, level, levelName, levelsArray, levelSelector } = props;
    const [showModal, setShowModal] = useState(false);


    //Handles the level selector modal
    const handleShowModal = () => {
        setShowModal(showModal => !showModal);
    }


    const handleLevelSelect = (level) => {
        handleShowModal();
        levelSelector(levelsArray.indexOf(level));
    }

    return (
        <div className="header">
            <img className="header-logo" src={logo} alt="The Legend of Zelda"/>
            <div className="header-title">
                <div className="name">The Legend of Zelda: Memory Card Game</div>
                <div className="title">Get points by clicking on an image but don't click on any more than once!</div>
            <button type="button" className="header-btn" onClick={handleShowModal}>
              Level Selector
            </button>
            </div>
            <div className="header-scoreboard">
                <div className="header-info level">Level {level}: {levelName}</div>
                <div className="header-info score">Your Score: {currentScore}</div>
                <div className="header-info score">High Score: {highScore}</div>
            </div>
            <LevelSelectModal show={showModal} levelsArray={levelsArray} handleLevelSelect={handleLevelSelect}/>
        </div>
    );
}

export default Header;