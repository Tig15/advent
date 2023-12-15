function extrapolateNextValue(histories) {
  function calculateNextSequence(sequence) {
    let nextSequence = [];
    for (let i = 0; i < sequence.length - 1; i++) {
      nextSequence.push(sequence[i + 1] - sequence[i]);
    }
    return nextSequence;
  }

  let sum = 0;

  // Split the input into individual histories
  let reports = histories
    .split("\n")
    .map((sequence) => sequence.split(" ").map(Number));

  for (let history of reports) {
    let sequence = history;

    let nextSequence = calculateNextSequence(sequence);

    while (nextSequence.some((val) => val !== 0)) {
      sequence = nextSequence;
      nextSequence = calculateNextSequence(sequence);
    }

    let lastValue = sequence[sequence.length - 1];
    let secondLastValue = sequence[sequence.length - 2];

    sum += lastValue + secondLastValue;
  }

  return sum;
}

let report = `0 3 6 9 12 15
  1 3 6 10 15 21
  10 13 16 21 30 45`;

let result = extrapolateNextValue(report);
console.log(result); // Output the sum of extrapolated values
