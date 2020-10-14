import React from "react";

export default ({ planet, showLabel = true }) => {
  const { name, positionX, positionY, size, color } = planet;

  return (
    <g>
      <circle cx={positionX} cy={positionY} r={size} fill={color} />
      {showLabel && (
        <PlanetLabel text={name} x={positionX} y={positionY} size={size} />
      )}
    </g>
  );
};

function PlanetLabel({
  x,
  y,
  size,
  text,
  color = "LightGray",
  borderColor = "DarkGray",
}) {
  const baseX = x - size / 2;
  const baseY = y - size - 5;

  let labelX = baseX + 1;
  let labelY = baseY + 1;
  let textX = baseX + 2;
  let textY = baseY + 4;

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
