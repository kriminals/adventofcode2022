const input15 = `Sensor at x=3482210, y=422224: closest beacon is at x=2273934, y=-202439
Sensor at x=3679395, y=2737332: closest beacon is at x=4104213, y=2980736
Sensor at x=3173475, y=3948494: closest beacon is at x=3494250, y=3554521
Sensor at x=27235, y=3642190: closest beacon is at x=-190885, y=3635525
Sensor at x=3851721, y=1754784: closest beacon is at x=3145586, y=2167751
Sensor at x=327074, y=3250656: closest beacon is at x=-190885, y=3635525
Sensor at x=3499970, y=3186179: closest beacon is at x=3494250, y=3554521
Sensor at x=150736, y=2522778: closest beacon is at x=-85806, y=2000000
Sensor at x=3000768, y=3333983: closest beacon is at x=2564067, y=3163630
Sensor at x=1751302, y=1660540: closest beacon is at x=3145586, y=2167751
Sensor at x=2591068, y=2923079: closest beacon is at x=2564067, y=3163630
Sensor at x=48946, y=3999178: closest beacon is at x=-190885, y=3635525
Sensor at x=3695475, y=3863101: closest beacon is at x=3494250, y=3554521
Sensor at x=1504031, y=2760: closest beacon is at x=2273934, y=-202439
Sensor at x=3021186, y=2667125: closest beacon is at x=3145586, y=2167751
Sensor at x=1514629, y=3771171: closest beacon is at x=2564067, y=3163630
Sensor at x=234064, y=616106: closest beacon is at x=-85806, y=2000000
Sensor at x=3990843, y=3393575: closest beacon is at x=4104213, y=2980736
Sensor at x=768875, y=2665271: closest beacon is at x=-85806, y=2000000`;
const positions = input15.split("\n").map((pair) =>
  pair
    .split(
      /Sensor at x=(-?\d+), y=(-?\d+): closest beacon is at x=(-?\d+), y=(-?\d+)/
    )
    .filter((el) => el !== "")
    .map((num) => parseInt(num))
);
type Point = {
  x: number;
  y: number;
};
const getDistance = (sensor: Point, beacon: Point): number => {
  let distance: number;
  distance = Math.abs(sensor.x - beacon.x) + Math.abs(sensor.y - beacon.y);
  return distance;
};
let square = new Map();
for (let i = 0; i < 4000001; i++) {
  square.set(i, new Array());
}
const getSquare = (sensor: Point, beacon: Point) => {
  const distance = getDistance(sensor, beacon);
  //  Square
  for (let j = -distance; j <= distance; j++) {
    square
      .get(sensor.y + j)
      ?.push([
        sensor.x - distance + Math.abs(j),
        sensor.x + distance - Math.abs(j),
      ]);
  }
};

function mergeRanges(ranges: [number, number][]): [number, number][] {
  if (ranges.length <= 1) {
    return ranges;
  }

  // Sort ranges by their starting value
  ranges.sort((a, b) => a[0] - b[0]);

  const mergedRanges: [number, number][] = [];
  let currentRange = ranges[0];

  for (let i = 1; i < ranges.length; i++) {
    const nextRange = ranges[i];

    // If the next range starts before or at the end of the current range,
    // merge the ranges by updating the end value of the current range
    if (nextRange[0] <= currentRange[1] + 1) {
      currentRange[1] = Math.max(currentRange[1], nextRange[1]);
    }
    // Otherwise, the next range is not contiguous with the current range,
    // so add the current range to the mergedRanges array and start a new current range
    else {
      mergedRanges.push(currentRange);
      currentRange = nextRange;
    }
  }

  // Add the final current range to the mergedRanges array
  mergedRanges.push(currentRange);

  return mergedRanges;
}
positions.forEach((pair) => {
  let sensor: Point = { x: pair.at(0), y: pair.at(1) };
  let beacon: Point = { x: pair.at(2), y: pair.at(3) };
  getSquare(sensor, beacon);
});
square.forEach((value, key) => {
  let merged = mergeRanges(value);
  if (merged.length > 1) {
    console.log(key, merged);
    console.log(key + (merged[0][1] + 1) * 4000000);
  }
});
export {};
