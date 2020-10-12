import React from "react";

export default ({ spaceship, showLabel = true, labelPosition }) => {
  const { spaceshipId, positionX, positionY, color } = spaceship;
  return (
    <g>
      <rect x={positionX} y={positionY} width={1} height={1} fill={color} />
      {showLabel && (
        <Label
          text={spaceshipId}
          x={positionX}
          y={positionY}
          borderColor={color}
          position={labelPosition}
        />
      )}
    </g>
  );
};

export const SpaceshipLabelPosition = {
  TopLeft: "TopLeft",
  TopRight: "TopRight",
  BottomLeft: "BottomLeft",
  BottomRight: "BottomRight",
};

function Label({
  x,
  y,
  text,
  color = "LightGray",
  borderColor = "DarkGray",
  position = SpaceshipLabelPosition.TopRight,
}) {
  let labelX = x + 3;
  let labelY = y - 5;
  let textX = x + 4;
  let textY = y + 3;
  switch (position) {
    case SpaceshipLabelPosition.TopLeft:
      labelX = labelX - 104;
      labelY = labelY - 7;
      textX = textX - 104;
      textY = textY - 7;
      break;
    case SpaceshipLabelPosition.TopRight:
      labelX = labelX - 1;
      labelY = labelY - 7;
      textY = textY - 7;
      break;
    case SpaceshipLabelPosition.BottomLeft:
      labelX = labelX - 104;
      labelY = labelY + 7;
      textY = textY + 7;
      textX = textX - 104;
      break;
    case SpaceshipLabelPosition.BottomRight:
      labelX = labelX - 1;
      labelY = labelY + 7;
      textY = textY + 7;
      break;
    default:
  }

  let labelWidth = 100;
  let labelHeight = 11;
  let textWidth = 30;
  let textHeight = 10;

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
          fontFamily: "Roboto Mono",
          fontSize: "6pt",
          fill: "Black",
        }}
      >
        {text}
      </text>
    </g>
  );
}
