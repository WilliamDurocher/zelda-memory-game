import React from "react";


const Card = (props) => {
    //get card const based on props
    //onclick that calls game logic

    const { card, gameLogic } = props;


    return (
        <div className="card-container" onClick={() => gameLogic(card.id)}>
        <div className="card-img">{card.id}</div>
        <div className="card-name">{card.title}</div>
        </div>
    );
}

export default Card;