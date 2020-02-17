import React from "react";

export default () => {
  const engineMode = "thrusters";
  return (
    <div className="engine">
      <div className="engineMonitor">
        <h1>Engine mode</h1> {engineMode}
      </div>
    </div>
  );
};
