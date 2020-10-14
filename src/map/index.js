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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="map">
        <img
          src="https://spaceship-workshop.netlify.com/map.png"
          width="135"
          alt="map"
          onClick={() => setModalIsOpen(true)}
        />
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
