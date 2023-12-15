function countWaysToBeatRecord(times, distances) {
  let ways = 1;

  for (let i = 0; i < times.length; i++) {
    const raceTime = times[i];
    const recordDistance = distances[i];

    let countWays = 0;
    for (let holdTime = 0; holdTime <= raceTime; holdTime++) {
      const speed = holdTime;
      const remainingTime = raceTime - holdTime;
      const distanceCovered = speed * remainingTime;

      if (distanceCovered > recordDistance) {
        countWays++;
      }
    }

    ways *= countWays;
  }

  return ways;
}

// Example input data
const times = [40, 82, 91, 66];
const distances = [277, 1338, 1349, 1063];

// Calculate the number of ways to beat the record
const totalWays = countWaysToBeatRecord(times, distances);
console.log("Total ways to beat the records:", totalWays);
