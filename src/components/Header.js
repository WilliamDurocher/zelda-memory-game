import React from "react";


const Header = () => {


    return (
        <div className="header">
            <div className="header-logo">logo here</div>
            <div className="header-title">
                <div className="name">Zelda Memory Game!</div>
                <div className="title">Get points by clicking on an image but don't click on any more than once!</div>
            </div>
            <div className="header-scoreboard">
                <div className="your-score">Your Score: 0</div>
                <div className="best-score">High Score: 15</div>
            </div>
        </div>
    );
}

export default Header;