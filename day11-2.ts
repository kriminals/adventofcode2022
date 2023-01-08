const input11_2: string = `Monkey 0:
Starting items: 91, 54, 70, 61, 64, 64, 60, 85
Operation: new = old * 13
Test: divisible by 2
  If true: throw to monkey 5
  If false: throw to monkey 2

Monkey 1:
Starting items: 82
Operation: new = old + 7
Test: divisible by 13
  If true: throw to monkey 4
  If false: throw to monkey 3

Monkey 2:
Starting items: 84, 93, 70
Operation: new = old + 2
Test: divisible by 5
  If true: throw to monkey 5
  If false: throw to monkey 1

Monkey 3:
Starting items: 78, 56, 85, 93
Operation: new = old * 2
Test: divisible by 3
  If true: throw to monkey 6
  If false: throw to monkey 7

Monkey 4:
Starting items: 64, 57, 81, 95, 52, 71, 58
Operation: new = old * old
Test: divisible by 11
  If true: throw to monkey 7
  If false: throw to monkey 3

Monkey 5:
Starting items: 58, 71, 96, 58, 68, 90
Operation: new = old + 6
Test: divisible by 17
  If true: throw to monkey 4
  If false: throw to monkey 1

Monkey 6:
Starting items: 56, 99, 89, 97, 81
Operation: new = old + 1
Test: divisible by 7
  If true: throw to monkey 0
  If false: throw to monkey 2

Monkey 7:
Starting items: 68, 72
Operation: new = old + 8
Test: divisible by 19
  If true: throw to monkey 6
  If false: throw to monkey 0`;
type Monkey = {
  id: number;
  items: number[];
  operation: Function;
  divisable: number;
  trueDiv: number;
  falseDiv: number;
  inspectedItems: number;
};

let monkeys: Monkey[] = input11_2
  .split("\n\n")
  .map((monkey) =>
    monkey.split("\n").map((line, index) => {
      if (index === 2) {
        return line.match(/[^=]*$/)[0].trimStart();
      }
      return line.match(/\d+/g).map((el) => parseInt(el));
    })
  )
  .map((element) => {
    let newMonk: Monkey = {
      id: 0,
      items: [],
      operation: new Function("old", "return old"),
      divisable: 0,
      trueDiv: 0,
      falseDiv: 0,
      inspectedItems: 0,
    };
    newMonk.id = element[0][0] as number;
    newMonk.items = element[1] as number[];
    newMonk.operation = new Function("old", `return ${element[2]}`);
    newMonk.divisable = element[3][0] as number;
    newMonk.trueDiv = element[4][0] as number;
    newMonk.falseDiv = element[5][0] as number;
    return newMonk;
  });

const modulo: number = monkeys.reduce((pre, cur) => cur.divisable * pre, 1);

for (let round = 1; round <= 10000; round++) {
  monkeys.forEach((monkey) => {
    while (monkey.items.length > 0) {
      let item = monkey.items.shift();
      let worryLevel: number = monkey.operation(item) % modulo;
      let throwTo: number =
        worryLevel % monkey.divisable === 0 ? monkey.trueDiv : monkey.falseDiv;
      monkey.inspectedItems++;
      monkeys[throwTo].items.push(worryLevel);
    }
  });
}
let inspectedItems: number[] = [];
for (const monkey of monkeys) {
  inspectedItems.push(monkey.inspectedItems);
}
inspectedItems.sort((a, b) => b - a);
console.log(inspectedItems[0] * inspectedItems[1]);
export {};
