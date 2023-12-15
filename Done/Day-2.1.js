function possibleGames(input, redCount, greenCount, blueCount) {
  const games = input.split("\n");
  const possibleGames = [];

  for (const game of games) {
    const subsets = game.split(";").map((subset) => subset.trim().split(", "));
    let possible = true;

    for (const subset of subsets) {
      const counts = { red: 0, green: 0, blue: 0 };

      for (const cube of subset) {
        const [count, color] = cube.split(" ");
        counts[color] += parseInt(count);
      }

      if (
        counts.red > redCount ||
        counts.green > greenCount ||
        counts.blue > blueCount
      ) {
        possible = false;
        break;
      }
    }

    if (possible) {
      const gameId = game.split(":")[0].replace("Game ", "");
      possibleGames.push(parseInt(gameId));
    }
  }

  return possibleGames;
}

const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const redCubes = 12;
const greenCubes = 13;
const blueCubes = 14;

const possible = possibleGames(input, redCubes, greenCubes, blueCubes);
const sum = possible.reduce((acc, gameId) => acc + gameId, 0);

console.log("Possible games:", possible);
console.log("Sum of IDs:", sum);
