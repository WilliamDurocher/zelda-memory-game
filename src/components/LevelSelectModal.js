import React from "react";

const LevelSelectModal = ({ show, levelsArray, handleLevelSelect, handleShowModal }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-container">
          <div className="modal-info">Level Selector</div>
          <div className="level-select">
            {levelsArray.map((level, id) => (
              <button key={id} type="button" className="btn selector" onClick={() => { handleLevelSelect(level) }} >
                Level {level.level} : {level.name}
              </button>
            ))}
            <button type="button" className="btn selector" onClick={handleShowModal} >
                Cancel
              </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LevelSelectModal;