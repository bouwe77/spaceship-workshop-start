import React, { useState, useEffect, useRef } from "react";
import {
  ReactSVGPanZoom,
  INITIAL_VALUE,
  fitSelection,
  TOOL_AUTO,
} from "react-svg-pan-zoom";
import useMap from "./useMap";
import SpaceStation from "./SpaceStation";
import Planet from "./Planet";
import Spaceship, { SpaceshipLabelPosition } from "./Spaceship";
import usePrevious from "./usePrevious";
import CoordDisplay from "./CoordDisplay";
import CoordCenterOn from "./CoordCenterOn";
import Tools from "./Tools";

const svgWidth = 12000;
const svgHeight = 12000;

function formatCoords(x, y) {
  return `${Math.round(x)},${Math.round(y)}`;
}

export default () => {
  const [value, setValue] = useState(INITIAL_VALUE);
  const prevValue = usePrevious(value);
  const tool = TOOL_AUTO;
  const [mouseOverCoords, setMouseOverCoords] = useState(formatCoords(0, 0));
  const [clickedCoords, setClickedCoords] = useState(formatCoords(0, 0));
  const [planets, spaceStations, spaceships] = useMap();
  // const planets = [];
  // const spaceStations = [];
  // const spaceships = [];

  // The coordinate where the map is centered on.
  const [centerZoomX, setCenterZoomX] = useState(200);
  const [centerZoomY, setCenterZoomY] = useState(60);
  const prevZoomX = usePrevious(centerZoomX);
  const prevZoomY = usePrevious(centerZoomY);

  let Viewer = null;

  function applyCenterZoom(x, y) {
    if (isNaN(x) || isNaN(y) || x < 0 || y < 0 || x > svgWidth || y > svgHeight)
      return;

    setCenterZoomX(x);
    setCenterZoomY(y);
  }

  function goToShip() {
    //    TODO coordinaten van huidige ship achterhalen...
    applyCenterZoom(200, 60);
  }

  useEffect(() => {
    function fitToSelection() {
      if (!value || !value.a) return;

      // The dimensions of the centered area of the map.
      const selectionWidthAndHeight = 200;

      // The coordinates of the centered area of the map.
      const selectionSvgPointX = centerZoomX - selectionWidthAndHeight / 2;
      const selectionSvgPointY = centerZoomY - selectionWidthAndHeight / 2;

      const newValue = fitSelection(
        value,
        selectionSvgPointX,
        selectionSvgPointY,
        selectionWidthAndHeight,
        selectionWidthAndHeight
      );
      setValue(newValue);
    }

    // Only fit to selection if value has changed by checking prevValue.
    // And also if we are not zooming which (somehow) works by only checking b and c...
    if (
      value &&
      prevValue &&
      value.b === prevValue.b &&
      value.c === prevValue.c &&
      typeof centerZoomX !== "undefined" &&
      typeof prevZoomX !== "undefined" &&
      centerZoomX === prevZoomX &&
      typeof centerZoomY !== "undefined" &&
      typeof prevZoomY !== "undefined" &&
      centerZoomY === prevZoomY
    ) {
      return;
    }

    fitToSelection();
  }, [value, prevValue, centerZoomX, prevZoomX, centerZoomY, prevZoomY]);

  useEffect(() => {
    Viewer.fitToViewer();
  }, [Viewer]);

  const mapWidth = 840;
  const mapHeight = 390;

  return (
    <div style={{ padding: "65px 0px 0px 70px" }}>
      <div
        style={{
          //          backgroundImage: url("/starfield.png"),
          width: mapWidth + "px",
          height: mapHeight + "px",
        }}
      >
        <ReactSVGPanZoom
          ref={(v) => (Viewer = v)}
          value={value}
          tool={tool}
          onChangeValue={(value) => setValue(value)}
          width={mapWidth}
          height={mapHeight}
          onMouseMove={(event) =>
            setMouseOverCoords(formatCoords(event.x, event.y))
          }
          onClick={(event) => setClickedCoords(formatCoords(event.x, event.y))}
          background="transparent"
          SVGBackground="transparent"
          miniatureProps={{ position: "none" }}
          customToolbar={() => null}
          detectAutoPan={false}
        >
          <svg width={svgWidth} height={svgHeight}>
            <g>
              {planets.map((planet) => (
                <Planet key={planet.name} planet={planet} />
              ))}
              {spaceStations.map((spaceStation) => (
                <SpaceStation
                  key={spaceStation.name}
                  spaceStation={spaceStation}
                />
              ))}
              {spaceships.map((spaceship) => (
                <Spaceship
                  key={spaceship.spaceshipId}
                  spaceship={spaceship}
                  labelPosition={SpaceshipLabelPosition.BottomRight}
                />
              ))}
            </g>
          </svg>
        </ReactSVGPanZoom>
      </div>

      <Tools>
        <CoordDisplay
          mouseOverCoords={mouseOverCoords}
          clickedCoords={clickedCoords}
        />
        <CoordCenterOn
          goToCoords={applyCenterZoom}
          goToShip={goToShip}
          defaultX={centerZoomX}
          defaultY={centerZoomY}
        />
      </Tools>
    </div>
  );
};
