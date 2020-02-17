import React from "react";
//import useServer from "./server/useServer"

export default function Cockpit({ engineMode, setEngineMode }) {
  //const [setCourse] = useServer("your spaceship name here...")

  const IDLE = "idle";
  const THRUSTERS = "thrusters";
  const IMPULSE = "impulse";

  return (
    <div className="cockpit">
      <div className="engineModePanel">
        <div>Engine mode</div>
        <div>
          <input type="radio" value={IDLE} checked={engineMode === IDLE} id={IDLE} />
          <label htmlFor={IDLE}>{IDLE}</label>
        </div>
        <div>
          <input
            type="radio"
            value={THRUSTERS}
            checked={engineMode === THRUSTERS}
            id={THRUSTERS}
          />
          <label htmlFor={THRUSTERS}>Thrusters</label>
        </div>
        <div>
          <input type="radio" value={IMPULSE} checked={engineMode === IMPULSE} id={IMPULSE} />
          <label htmlFor={IMPULSE}>Impulse</label>
        </div>
      </div>
      <div className="navigationPanel">
        <button>Go</button>
      </div>
      <div className="locationPanel" />
    </div>
  );
}
