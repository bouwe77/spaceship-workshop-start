import React, { useRef } from "react";
import styles from "./Tools.module.css";

export default function CoordCenterOn({
  goToCoords,
  goToShip,
  defaultX,
  defaultY,
}) {
  const centerZoomXRef = useRef();
  const centerZoomYRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const x = parseInt(centerZoomXRef.current.value.trim());
    const y = parseInt(centerZoomYRef.current.value.trim());
    goToCoords(x, y);
  }

  return (
    <div className={styles.jump}>
      enter coord:{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="X"
          defaultValue={defaultX}
          ref={centerZoomXRef}
          className={styles["coord-input"]}
        />
        <input
          type="text"
          placeholder="Y"
          defaultValue={defaultY}
          ref={centerZoomYRef}
          className={styles["coord-input"]}
        />
        <button type="submit" className={styles["coord-button"]}>
          GO TO
        </button>
      </form>
      <div style={{ marginLeft: "60px" }}>
        <button className={styles["coord-button"]} onClick={goToShip}>
          LOCATE YOUR SHIP
        </button>
      </div>
    </div>
  );
}
