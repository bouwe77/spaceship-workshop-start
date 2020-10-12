import React from "react";
import styles from "./Tools.module.css";

export default function CoordDisplay({ mouseOverCoords, clickedCoords }) {
  return (
    <>
      <div className={styles.coords}>mouseover: {mouseOverCoords}</div>
      <div className={styles.coords}>clicked: {clickedCoords}</div>
    </>
  );
}
