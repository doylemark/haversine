var EARTH_RADIUS = 6371;
var toRad = function (degrees) { return (degrees * Math.PI) / 180; };
// https://en.wikipedia.org/wiki/Haversine_formula
var haversine = function (from, to) {
    var dLat = toRad(to[0] - from[0]);
    var dLon = toRad(to[1] - from[1]);
    var theta = toRad(from[0]);
    var phi = toRad(to[0]);
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLon / 2), 2) * Math.cos(theta) * Math.cos(phi);
    console.log(a);
    var c = 2 * Math.asin(Math.sqrt(a));
    return EARTH_RADIUS * c;
};
console.log(haversine([53, -6], [43, 2]));
