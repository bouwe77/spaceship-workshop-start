import React from "react";

export const engineModes = {
  IDLE: "idle",
  THRUSTERS: "thrusters",
  IMPULSE: "impulse",
};

export function EngineMode({ engineMode = engineModes.IDLE }) {
  const { IDLE, THRUSTERS, IMPULSE } = engineModes;

  return (
    <>
      <div>
        <input
          type="radio"
          value={IDLE}
          checked={engineMode === IDLE}
          id={IDLE}
        />
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
        <input
          type="radio"
          value={IMPULSE}
          checked={engineMode === IMPULSE}
          id={IMPULSE}
        />
        <label htmlFor={IMPULSE}>Impulse</label>
      </div>
    </>
  );
}
