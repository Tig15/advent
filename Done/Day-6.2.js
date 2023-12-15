function countWaysToBeatRecord(raceTime, recordDistance) {
  let countWays = 0;

  for (let holdTime = 14; holdTime <= raceTime - 14; holdTime++) {
    const speed = holdTime;
    const remainingTime = raceTime - holdTime;
    const distanceCovered = speed * remainingTime;

    if (distanceCovered > recordDistance) {
      countWays++;
    }
  }

  return countWays;
}

// Given race time and record distance
const raceTime = 40829166;
const recordDistance = 277133813491063;

// Calculate the number of ways to beat the record
const totalWays = countWaysToBeatRecord(raceTime, recordDistance);
console.log("Total ways to beat the record:", totalWays);
