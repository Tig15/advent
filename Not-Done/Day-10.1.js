function findFarthestPoint(gridStr) {
  const grid = gridStr.split("\n").map((row) => row.trim());

  const directions = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  const startX = grid.findIndex((row) => row.includes("S"));
  const startY = grid[startX].indexOf("S");

  const visited = new Set();
  const queue = [{ x: startX, y: startY, distance: 0 }];

  let maxDistance = 0;

  while (queue.length > 0) {
    const { x, y, distance } = queue.shift();
    maxDistance = Math.max(maxDistance, distance);

    const key = `${x},${y}`;
    if (visited.has(key)) continue;
    visited.add(key);

    for (const [dx, dy] of Object.values(directions)) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX >= 0 &&
        newX < grid.length &&
        newY >= 0 &&
        newY < grid[0].length &&
        grid[newX][newY] !== "."
      ) {
        queue.push({ x: newX, y: newY, distance: distance + 1 });
      }
    }
  }

  return maxDistance;
}

const gridString = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

const result = findFarthestPoint(gridString);
console.log("Steps along the loop to farthest point:", result);
