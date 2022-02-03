import React, { useState, useEffect } from "react";
import Card from './Card';



const Gameboard = (props) => { 
    const { gameLogic, currentScore, highScore, level } = props;
  
    const [cardsArray, setCardsArray] = useState(level.cards);

    const randomize = (newArray) => {
        for (var i = newArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
        }
    }

    useEffect(() => {
        const newArray = [...cardsArray];
        randomize(newArray);
        setCardsArray(newArray);
    }, [currentScore, highScore]);

    return (
        <div className="gameboard">
            {cardsArray.map((card, id) => (
                <Card card={card} key={card.id} gameLogic={gameLogic} highestScore={level.highestScore} />
            ))}
        </div>
    );
}

export default Gameboard;