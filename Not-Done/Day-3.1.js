const engineSchematic = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`;

function isSymbol(char) {
  const symbols = ["*", "#", "+", "$"];
  return symbols.includes(char);
}

function sumPartNumbers(engineSchematic) {
  const rows = engineSchematic.trim().split("\n");

  const height = rows.length;

  const width = rows[0].length;

  const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
  const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

  let sum = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const currentChar = rows[i][j];
      if (!isSymbol(currentChar) && currentChar !== ".") {
        let adjacentPart = false;
        for (let k = 0; k < 8; k++) {
          const ni = i + dy[k];
          const nj = j + dx[k];
          if (
            ni >= 0 &&
            ni < height &&
            nj >= 0 &&
            nj < width &&
            isSymbol(rows[ni][nj])
          ) {
            adjacentPart = true;
            break;
          }
        }
        if (adjacentPart) {
          sum += parseInt(currentChar);
        }
      }
    }
  }

  return sum;
}

const totalSum = sumPartNumbers(engineSchematic);
console.log(
  "The sum of all part numbers in the engine schematic is:",
  totalSum
);
