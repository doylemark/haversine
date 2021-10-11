const EARTH_RADIUS = 6371;

const toRad = (degrees: number) => (degrees * Math.PI) / 180;

type Coord = [number, number];

// https://en.wikipedia.org/wiki/Haversine_formula
const haversine = (from: Coord, to: Coord) => {
  const dLat = toRad(to[0] - from[0]);
  const dLon = toRad(to[1] - from[1]);

  const theta = toRad(from[0]);
  const phi = toRad(to[0]);

  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(theta) * Math.cos(phi);

  const c = 2 * Math.asin(Math.sqrt(a));

  return EARTH_RADIUS * c;
};

console.log(haversine([53, -6], [43, 2]));