#include <stdio.h>
#include <math.h>

static const int EARTH_RADIUS = 6371;

double toRad(double d)
{
  return (d * M_PI) / 180;
}

double haversine(double from[2], double to[2])
{
  double dLat = toRad(to[0] - from[1]);
  double dLon = toRad(to[1] - from[1]);

  double theta = toRad(from[0]);
  double phi = toRad(to[0]);

  double a = pow(sin((dLat / 2)), 2) + pow(sin(dLon / 2), 2) * cos(theta) * cos(phi);

  double c = 2 * asin(sqrt(a));

  return c * EARTH_RADIUS;
}

int main()
{
  double from[2] = {53, -6};
  double to[2] = {43, 4};

  double d = haversine(from, to);
  printf("%f", d);

  return 0;
}
