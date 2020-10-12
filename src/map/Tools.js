import React from "react";
import styles from "./Tools.module.css";

export default function Tools({ children }) {
  return <div className={styles.tools}>{children}</div>;
}
