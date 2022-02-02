import React from "react";


const Header = (props) => {

    const { currentScore, highScore } = props;

    return (
        <div className="header">
            <div className="header-logo">logo here</div>
            <div className="header-title">
                <div className="name">Zelda Memory Game!</div>
                <div className="title">Get points by clicking on an image but don't click on any more than once!</div>
            </div>
            <div className="header-scoreboard">
                <div className="your-score">Your Score: {currentScore}</div>
                <div className="best-score">High Score: {highScore}</div>
            </div>
        </div>
    );
}

export default Header;