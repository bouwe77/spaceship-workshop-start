import React from "react";

export default () => {
  const engineMode = "idle";

  return (
    <div className="engine">
      <div className="engineMonitor">
        <h1>Engine mode:</h1> &gt;&gt; {engineMode}
      </div>
    </div>
  );
};
