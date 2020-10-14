import React from "react";

export default ({ spaceStation, showLabel = true }) => {
  const { name, positionX, positionY, width, height, color } = spaceStation;

  return (
    <g>
      <rect
        x={positionX}
        y={positionY}
        width={width}
        height={height}
        fill={color}
      />

      {showLabel && (
        <SpaceStationLabel
          text={name}
          x={positionX}
          y={positionY - height / 2 - 2}
        />
      )}
    </g>
  );
};

function SpaceStationLabel({
  x,
  y,
  text,
  color = "LightGray",
  borderColor = "DarkGray",
}) {
  let labelX = x + 1;
  let labelY = y + 2;
  let textX = x + 2;
  let textY = y + 5;

  let labelWidth = 34;
  let labelHeight = 4;
  let textWidth = 10;
  let textHeight = 3;

  return (
    <g>
      <rect
        x={labelX}
        y={labelY}
        width={labelWidth}
        height={labelHeight}
        fill={color}
        stroke={borderColor}
      />
      <text
        x={textX}
        y={textY}
        width={textWidth}
        height={textHeight}
        style={{
          fontFamily: "Share Tech Mono",
          fontSize: "2pt",
          fill: "Black",
        }}
      >
        {text}
      </text>
    </g>
  );
}
