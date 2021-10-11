package haversine

import "math"

const (
	earthRadius = 6371
)

func toRad(d float64) float64 {
	return (d * math.Pi) / 180
}

type Coord [2]float64

func Haversine(dest Coord, arr Coord) float64 {
	dLat := toRad(arr[0] - dest[1])
	dLon := toRad(arr[1] - dest[1])

	theta := toRad(dest[0])
	phi := toRad(arr[0])

	a := math.Pow(math.Sin((dLat/2)), 2) +
		math.Pow((math.Sin(dLon/2)), 2)*math.Cos(theta)*math.Cos(phi)

	c := 2 * math.Asin(math.Sqrt(a))

	return earthRadius * c
}
