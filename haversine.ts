const EARTH_RADIUS = 6371;

const toRad = (degrees: number) => (degrees * Math.PI) / 180;

type Coord = [number, number];

// https://en.wikipedia.org/wiki/Haversine_formula
const haversine = (dest: Coord, arr: Coord) => {
  const dLat = toRad(arr[0] - dest[0]);
  const dLon = toRad(arr[1] - dest[1]);

  const theta = toRad(dest[0]);
  const phi = toRad(arr[0]);

  // Haversine Formula
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(theta) * Math.cos(phi);

  const c = 2 * Math.asin(Math.sqrt(a));

  return EARTH_RADIUS * c;
};
