import React from "react";


const Card = (props) => {
    //get card const based on props
    //onclick that calls game logic

    const { card, gameLogic, highestScore } = props;


    return (
        <div className="card-container" onClick={() => gameLogic(card.id, highestScore)}>
        <img className="card-img" src={card.image} alt={card.title}></img>
        <div className="card-name">{card.title}</div>
        </div>
    );
}

export default Card;