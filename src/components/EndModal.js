import React from "react";

const EndModal = ({ nextLevel, restartLevel, show, gameStatus, restartGame }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const nextLevelBtnClassName = gameStatus === "loser" || gameStatus === "end" ? "btn display-none" : "btn display-block";
  const restartGameBtnClassName = gameStatus === "end" ? "btn display-block": "btn display-none";

  let modalTitle = "";

  if (gameStatus === "winner") {
    modalTitle = "You completed this level! Good job!";
  } else if (gameStatus === "loser") {
    modalTitle = "Game Over";
  } else {
    modalTitle = "You finished the game! Amazing!";

  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-container">
          <div className="modal-info">{modalTitle}</div>
          <div className="btn-container">
            <button type="button" className="btn" onClick={restartLevel}>
              Restart Level
            </button>
            <button type="button" className={nextLevelBtnClassName} onClick={nextLevel}>
              Next Level
            </button>
            <button type="button" className={restartGameBtnClassName} onClick={restartGame}>
              Restart Game
            </button>
          </div>

        </div>

      </section>
    </div>
  );
}

export default EndModal;