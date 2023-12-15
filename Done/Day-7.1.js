function compareHands(hand1, hand2) {
  const order = "AKQJT98765432A";

  for (let i = 0; i < 5; i++) {
    const card1 = hand1[i];
    const card2 = hand2[i];
    if (order.indexOf(card1) !== order.indexOf(card2)) {
      return order.indexOf(card2) - order.indexOf(card1);
    }
  }
  return 0;
}

function rankHands(hands) {
  const handTypes = [
    "Five of a kind",
    "Four of a kind",
    "Full house",
    "Three of a kind",
    "Two pair",
    "One pair",
    "High card",
  ];

  hands.sort((handA, handB) => {
    const typeA = handTypes.indexOf(handA.type);
    const typeB = handTypes.indexOf(handB.type);
    if (typeA !== typeB) {
      return typeB - typeA;
    } else {
      return compareHands(handA.cards, handB.cards);
    }
  });

  const totalHands = hands.length;
  let totalWinnings = 0;
  for (let i = 0; i < totalHands; i++) {
    totalWinnings += hands[i].bid * (i + 1);
  }

  return { ranks: hands.map((hand, index) => index + 1), totalWinnings };
}

function getType(cards) {
  const uniqueCards = [...new Set(cards.split(""))];
  const counts = uniqueCards.map((card) => cards.split(card).length - 1);
  const maxCount = Math.max(...counts);

  if (maxCount === 5) return "Five of a kind";
  if (maxCount === 4) return "Four of a kind";
  if (maxCount === 3 && counts.includes(2)) return "Full house";
  if (maxCount === 3) return "Three of a kind";
  if (maxCount === 2 && counts.filter((count) => count === 2).length === 2)
    return "Two pair";
  if (maxCount === 2) return "One pair";
  return "High card";
}

function calculateWinnings(input) {
  const hands = input.map((line) => {
    const [cards, bid] = line.split(" ");
    const type = getType(cards);
    return { cards: cards.split(""), bid: parseInt(bid), type };
  });

  return rankHands(hands);
}

const input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

const inputArray = input.split("\n");
const result = calculateWinnings(inputArray);
console.log("Ranks:", result.ranks); // Ranks of each hand
console.log("Total winnings:", result.totalWinnings); // Total winnings
