import { getSpaceObjectsForMap, getSpaceships } from "../server/api";
import { useState, useEffect } from "react";
import useInterval from "@use-it/interval";

export default () => {
  const [planets, setPlanets] = useState([]);
  const [spaceStations, setSpaceStations] = useState([]);
  const [spaceships, setSpaceships] = useState([]);

  // Only get the planets and space station on the first render.
  useEffect(() => {
    async function getSpaceObjectsFromApiAndSetState() {
      try {
        const spaceObjects = await getSpaceObjectsForMap();

        const planets = spaceObjects.filter(
          (spaceObject) => spaceObject.type === "planet"
        );
        setPlanets(planets);

        const spaceStations = spaceObjects.filter(
          (spaceObject) => spaceObject.type === "spacestation"
        );
        setSpaceStations(spaceStations);
      } catch {
        return [];
      }
    }

    getSpaceObjectsFromApiAndSetState();
  }, []);

  // Get the spaceships every x seconds.
  useInterval(async () => {
    try {
      const spaceships = await getSpaceships();
      setSpaceships(spaceships);
    } catch {
      setSpaceships([]);
    }
  }, 5000);

  return [planets, spaceStations, spaceships];
};
