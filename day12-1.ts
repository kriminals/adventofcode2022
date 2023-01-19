const input: string = `abccccccccccccccccaaccccccccccccccccccccaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaa
abcccccccccccccaaaaaccccccccccccccccccccaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaa
abccccccccccccccaaaaaccccccccccccccaaaaacccaaaaaacccccaaccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaa
abccccccccccccccaaaaacccccccccaacccaaaaacccaaaaaaaccccaaaacaacaaccccccccccccccccccccccccaaaccccaaaccccccccccccaaaa
abcccccccccccccaaaaacccccccaaaaaccaaaaaacccaaaaaaaacaaaaaacaaaaaccccccccccccccccccccccccaaacccaaaaccccccccccccaaac
abccccccaacaaaccccaaccccccccaaaaacaaaaaaccaaaacaaaacaaaaaccaaaaaaccccccccccccccccccccccccaaaaaaaacccccccccccccaacc
abccccccaaaaaaccccccccccccccaaaaacaaaaaaccaaaaccaaaacaaaaacaaaaaacccccccccccccccccccccccaaaaaaaaaccccccccccccccccc
abccccccaaaaaacccccccccccccaaaaaccccaaccccaacccccaaccaacaacaaaaaccccccccccccccccccccccccccaaakkkkllllcccaaaccccccc
abccccccaaaaaaacccccccccccccccaaccccaacccccccccccccccccccccccaaaccccccaaaacccccccccjjjjkkkkkkkkkkllllccccaacaccccc
abcccccaaaaaaaacccccaaccccccccccccccaaaaaaccccccccccccccccccaaccccccccaaaaccccccccjjjjjkkkkkkkkkppllllcccaaaaacccc
abcccccaaaaaaaaccaaaacccccccccccccccaaaaaccccccccccccccccaacaaccccccccaaaacccccccjjjjjjjkkkkkppppppplllccaaaaacccc
abccccccccaaaccccaaaaaacccccccccccaaaaaaaccccccccccccccccaaaaacccccccccaacccccccjjjjoooooooppppppppplllcccaaaccccc
abccccccccaaccccccaaaaaccccaacccccaaaaaaaaccccaaacccccccccaaaaaaacccccccccccccccjjjooooooooppppuuppppllcccaaaccccc
abccccccaacccccccaaaaacccccaaaccaaaaaaaaaaccaaaaaaccccccaaaaaaaaaacaaaccccccccccjjjoooouuuoopuuuuupppllcccaaaccccc
abacccccaaccccccccccaacccccaaaaaaaccaaaaaaccaaaaaaccccccaaaaaccaaaaaaaccccaaccccjjoootuuuuuuuuuuuuvpqlllcccccccccc
abaccaaaaaaaacccccccccccccccaaaaaaccaacccccccaaaaacccccccacaaaccaaaaaaccaaaacaccjjooottuuuuuuuxyuvvqqljjccddcccccc
abcccaaaaaaaaccccccccccccaaaaaaaaacaacaaccccaaaaaccccccccccaaaaaaaaaacccaaaaaacciijootttxxxuuxyyyvvqqjjjjdddcccccc
abcccccaaaaccccaaacccccccaaaaaaaaacaaaaaccccaaaaaccccccccccccaaaaaaaaacccaaaaccciiinntttxxxxxxyyvvqqqqjjjddddccccc
abccccaaaaaccccaaaaacccccaaaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaccaaaaccciiinntttxxxxxxyyvvvqqqqjjjdddccccc
abccccaaaaaaccaaaaaccccccccaaaaaaaaaaaaaacccccccccccccccccccccccaaacaaacaacaaccciiinnnttxxxxxyyyvvvvqqqqjjjdddcccc
SbccccaaccaaccaaaaacccccccccaaaaaaaaaaaaacccccccccccccccccccccccaaacccccccccccciiinnntttxxxEzzyyyyvvvqqqjjjdddcccc
abcccccccccccccaaaaacccccccaaaaaaaaacaaaccccccccccccccccccccccccaaccccccccccccciiinnnttxxxxyyyyyyyyvvvqqqjjjdddccc
abcccccccccccccaaccccccccccaaaaaaaaccccccccccccccccccccccccccccccccccccccccccciiinnntttxxyyyyyyyyyvvvvqqqjjjdddccc
abccccccccccccccccccccccccaaaaaaaacccccccccccccccccccccccccccccccccccccccccccciiinntttxxxwwwyyywwvvvvrqqjjjjdddccc
abcccccccccccccccccccccccccccaaaaaaccccccccccccccccccccccccccccccccccccccccccciinnntttxwwwwwyyywwvvvrrrqkkkeddcccc
abcccccccccccccccccccccccccccaaaaaaccccccccccccccccccccccccccccccccccccccccccchhnnntttsswwswwyywwrrrrrrkkkkeeecccc
abcccccccccccccccccccccccccccaaaaaacccccccccccccccccccaccccccccccccaaacccccccchhhnmmssssssswwwwwwrrrkkkkkeeeeecccc
abcccccccccccccccccccccccccccccaaacccccccccccccccccccaaccccccccccaaaaaacccccaahhhmmmmmsssssswwwwrrrkkkkkeeeeeccccc
abaacccccccccccccaccccccccccccccccccccccccccccccccaaaaacaacccccccaaaaaacaaaaaahhhhmmmmmmmmssswwwrrkkkkeeeeeacccccc
abacccccccccccccaaaaaaaaccccccccaaacccccccaaccccccaaaaaaaacccccccaaaaaacaaaaaaahhhhmmmmmmmmsssrrrrkkkeeeeeaacccccc
abaaaccccaaccccccaaaaaacccccccccaaacccaacaaaccccccccaaaacccccccccaaaaacccaaaaaaahhhhhhhmmmmlsssrrllkfeeeeaaaaacccc
abaaaccaaaaccccccaaaaaacccccccccaaaaaaaaaaaaaacccccaaaaacccccccccaaaaacccaaaaaaachhhhhgggmllsssrrllkffeaaaaaaacccc
abaacccaaaaaacccaaaaaaaacccccaaaaaaaaaaaaaaaaacccccaacaaacccccccccccccccaaaaaacccccchggggglllllllllfffaaaaaaaacccc
abaaccccaaaacccaaaaaaaaaaccccaaaaaaaaacaaaaaaaccaccaccaaacccccccccccccccaaaaaacccccccccgggglllllllffffaaaaaacccccc
abcccccaaaaacccaaaaaaaaaacccccaaaaaaaccaaaaacccaaaccccccccccccccccccccccccccaacccccccccagggglllllffffccccaaacccccc
abcccccaacaaccccccaaaaacaccaacccaaaaaaaaaaaaaccaaacccccccccccccccccccccccccccccccccccccaagggggffffffcccccccccccccc
abcccccccccccaaaaaaaaacccccaaccaaaaaaaccaaaaacaaaaccccccccccccccccccccccccccccccccccccaaaacgggfffffccccccccccccccc
abcccccccccccaaaaacaacccaaaaaaaaaaccaacccaaaaaaaacccaaccccccccccccccccccccccccccccccccccccccggfffccccccccccccaaaca
abccccccccccaaaaaaccccccaaaaaaaaacccccccccaaaaaaaaaaaacccccccccccccaaaccccccccccccccccccccccaaaccccccccccccccaaaaa
abccccccccccaaaaaaccccccccaaaacccccccccccccaaaaaaaaaaaaccccccccccccaaaaccccccccccccccccccccccaaaccccccccccccccaaaa
abcccccccccccaaaaacccccccaaaaaaccccccccccaaaaaaaaaaaaaaccccccccccccaaaaccccccccccccccccccccccccccccccccccccccaaaaa`;
const grid: Array<Array<string>> = input
  .split("\n")
  .map((line) => line.split(""));
type Point = {
  row: number;
  col: number;
};

// Convert grid to a Map
let nodes = new Map<Point, string>();
grid.forEach((row, indexRow) => {
  row.forEach((col, indexCol) => {
    nodes.set({ row: indexRow, col: indexCol }, col);
  });
});

const canMove = (src: string, dst: string): boolean => {
  switch (src) {
    case "S":
      src = "a";
      break;
    case "E":
      src = "z";
      break;
  }
  switch (dst) {
    case "S":
      dst = "a";
      break;
    case "E":
      dst = "z";
      break;
  }
  if (dst.charCodeAt(0) <= src.charCodeAt(0) + 1) return true;
  return false;
};

const hasKey = (point: Point, map: Map<Point, string>): boolean => {
  for (let key of Array.from(map.keys())) {
    if (JSON.stringify(key) == JSON.stringify(point)) return true;
  }
  return false;
};
const getKey = (point: Point, map: Map<Point, string>): string => {
  for (let [key, value] of Array.from(map.entries())) {
    if (JSON.stringify(key) == JSON.stringify(point)) return value;
  }
  return undefined;
};
const getPointKey = (
  point: Point,
  map: Map<Point, Array<Point>>
): Array<Point> => {
  for (let [key, value] of Array.from(map.entries())) {
    if (JSON.stringify(key) == JSON.stringify(point)) return value;
  }
  return undefined;
};

const getNeighbours = (
  point: Point,
  nodes: Map<Point, string>
): Array<Point> => {
  let neighbors: Array<Point> = [];
  const up: Point = { row: point.row - 1, col: point.col };
  // up
  if (hasKey(up, nodes)) neighbors.push({ row: point.row - 1, col: point.col });
  // down
  const down: Point = { row: point.row + 1, col: point.col };
  if (hasKey(down, nodes))
    neighbors.push({ row: point.row + 1, col: point.col });
  // left
  const left: Point = { row: point.row, col: point.col - 1 };
  if (hasKey(left, nodes))
    neighbors.push({ row: point.row, col: point.col - 1 });
  // right
  const right: Point = { row: point.row, col: point.col + 1 };
  if (hasKey(right, nodes))
    neighbors.push({ row: point.row, col: point.col + 1 });

  return neighbors.filter((element) => {
    return canMove(getKey(point, nodes), getKey(element, nodes));
  });
};

let adjacencyList = new Map<Point, Array<Point>>();
nodes.forEach((value, key, map) => {
  adjacencyList.set(key, getNeighbours(key, map));
});
const shortestPath = (
  src: Point,
  dst: Point,
  graph: Map<Point, Array<Point>>
): number => {
  let queue: [[Point, number]] = [[src, 0]];
  let visited = new Set([src]);
  while (queue.length > 0) {
    let [node, distance] = queue.shift();
    if (JSON.stringify(node) == JSON.stringify(dst)) return distance;
    for (let neighbor of getPointKey(node, graph)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return 0;
};

const findElement = (el: string, nodes: Map<Point, string>): Point => {
  for (let [key, value] of Array.from(nodes.entries())) {
    if (value === el) return key;
  }
  return { row: 0, col: 0 };
};
const start: Point = findElement("S", nodes);
const end: Point = findElement("E", nodes);
console.log(shortestPath(start, end, adjacencyList));
export {};
