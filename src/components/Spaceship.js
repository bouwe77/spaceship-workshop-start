import React from "react";
import Cockpit from "./Cockpit";

export default function Spaceship() {
  return (
    <>
      <h1>My Spaceship</h1>
      <div className="starfield">
        <Cockpit />
      </div>
    </>
  );
}
