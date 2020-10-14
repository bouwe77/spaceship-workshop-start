import React from "react";
import Map from "../map";

export default function Cockpit() {
  return (
    <div className="cockpit">
      <div className="leftscreen"/>
      <div className="rightscreen"/>
      <div className="mainscreen">
        <Map />
      </div>
    </div>
  );
}
