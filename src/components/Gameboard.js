import React, { useState, useEffect } from "react";
import Card from './Card';
import uniqid from "uniqid";

const Gameboard = (props) => {
//array of cards object containing id, image, and title
//state var that initialize with array
//shuffle function 
//use effect hook that takes state array, sends into shuffle and setarray to newly shuffled array
//return map of cards
const { gameLogic, currentScore, highScore } = props;
const cards = [
    {
        "id": uniqid(),
        "title":"Link",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Zelda",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Link",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Bob",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Ganon",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Mario",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Miko",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Link",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Link",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Link",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Link",
        "image": ""
    },
    {
        "id": uniqid(),
        "title":"Link",
        "image": ""
    }
]
const [cardsArray, setCardsArray] = useState(cards);

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
        <Card card={card} key={card.id} gameLogic={gameLogic} />
      ))}
        </div>
    );
}

export default Gameboard;