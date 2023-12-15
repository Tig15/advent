function calculatePoints(cards) {
  let totalPoints = 0;

  const cardsArray = cards.split("\n").map((card) =>
    card
      .split(": ")[1]
      .split(" | ")
      .map((numbers) => numbers.trim())
  );

  for (let i = 0; i < cardsArray.length; i++) {
    const card = cardsArray[i];
    const winningNumbers = card[0].split(" ").map(Number);
    const yourNumbers = card[1].split(" ").map(Number);

    let points = 0;
    const matchedNumbers = new Set();

    for (let j = 0; j < yourNumbers.length; j++) {
      if (
        winningNumbers.includes(yourNumbers[j]) &&
        !matchedNumbers.has(yourNumbers[j])
      ) {
        matchedNumbers.add(yourNumbers[j]);
        points = points === 0 ? 1 : points * 2;
      }
    }

    totalPoints += points;

    // Display card number and its points
    // console.log(`Card ${i + 1}: ${points} points`);
  }

  return totalPoints;
}

// Example cards data (without calculations)
const exampleCards = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
  Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
  Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
  Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
  Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
  Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

const totalPoints = calculatePoints(exampleCards);
console.log(`Total points: ${totalPoints}`);
