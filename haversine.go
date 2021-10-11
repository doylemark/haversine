package main

import (
	"fmt"
	"math"
)

const (
	earthRadius = 6371
)

func toRad(d float64) float64 {
	return (d * math.Pi) / 180
}

type Coord [2]float64

func Haversine(from Coord, to Coord) float64 {
	dLat := toRad(from[0] - to[0])
	dLon := toRad(from[1] - to[1])

	theta := toRad(to[0])
	phi := toRad(from[0])

	a := math.Pow(math.Sin((dLat/2)), 2) +
		math.Pow((math.Sin(dLon/2)), 2)*math.Cos(theta)*math.Cos(phi)

	c := 2 * math.Asin(math.Sqrt(a))

	return earthRadius * c
}

func main() {
	t := Haversine(Coord{53, -6}, Coord{43, 2})
	fmt.Println(t)
}
