import React, { useState } from "react";
import Modal from "react-modal";
import Map from "./Map";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "0",
    backgroundColor: "transparent",
  },
};

export default () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
      <div className="map" onClick={() => setModalIsOpen(true)}>
        ...
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="map-modal">
          <Map />
        </div>
      </Modal>
    </>
  );
};
