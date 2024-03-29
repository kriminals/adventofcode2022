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
const getSquare = (sensor: Point, beacon: Point, line: number): number[] => {
  let square: number[] = [];
  const distance = getDistance(sensor, beacon);
  // down triangle including middle line
  for (let j = 0; j <= distance; j++) {
    if (sensor.y + j !== line) continue;
    for (let i = -distance + j; i <= distance - j; i++) {
      square.push(sensor.x + i);
    }
  }
  // upper triangle excluding middle line
  for (let j = 1; j <= distance; j++) {
    if (sensor.y - j !== line) continue;
    for (let i = -distance + j; i <= distance - j; i++) {
      square.push(sensor.x + i);
    }
  }
  return square;
};
let line: number = 2000000;
let xPos: number[] = [];
positions.forEach((pair) => {
  let sensor: Point = { x: pair.at(0), y: pair.at(1) };
  let beacon: Point = { x: pair.at(2), y: pair.at(3) };
  xPos = [...xPos, ...getSquare(sensor, beacon, line)];
});
console.log(new Set(xPos).size - 1);
export {};
