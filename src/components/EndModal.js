import React from "react";

const EndModal = ({nextLevel, show}) => {

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <button type="button" onClick={nextLevel}>
            Next level
          </button>
        </section>
      </div>
    );
}

export default EndModal;