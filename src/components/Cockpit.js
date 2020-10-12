import React from "react";
import Map from "../map";
//import useServer from "./server/useServer"

export default function Cockpit({ engineMode, setEngineMode }) {
  //const { setCourse } = useServer("...")

  return (
    <div className="cockpit">
      <div className="mainscreen">
        <Map />
      </div>
    </div>
  );
}

/*
  function handleSpaceObjectChanged(event) {
    // Determine the value of the selected item, which is the space object name.
    const selectedSpaceObjectName = event.target.value;
    setSelectedSpaceObjectName(selectedSpaceObjectName);

    // If nothing was selected, quit further processing.
    if (!selectedSpaceObjectName) return;

    // A space object was selected, find it in the spaceObjects array.
    const selectedSpaceObject = spaceObjects.find(
      s => s.name === selectedSpaceObjectName
    );

    // Update the destination according to the selected space object's destination.
    setDestinationX(selectedSpaceObject.destinationX);
    setDestinationY(selectedSpaceObject.destinationY);
  }
  */
