import React from "react";
import Cockpit from "./Cockpit";
import Engine from "./Engine";

export default function Spaceship() {
  return (
    <div>
      <Engine />
      {/*<div>Engine</div>*/}
      {/*<div>Cockpit</div>*/}
      <Cockpit />
    </div>
  );
}
