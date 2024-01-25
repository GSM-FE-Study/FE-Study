function solution(dirs) {
  const firstPathMap = new Map();
  let now = [0, 0];
  let moved;
  for (let dir of dirs) {
    moved = move(now, dir);
    if (moved[0] < -5 || moved[0] > 5 || moved[1] < -5 || moved[1] > 5) {
      continue;
    }
    firstPathMap.set(generateKey(now, moved), true);
    now = moved;
  }

  return firstPathMap.size;
}

function move(now, dir) {
  switch (dir) {
    case "L":
      return [now[0] - 1, now[1]];
    case "R":
      return [now[0] + 1, now[1]];
    case "U":
      return [now[0], now[1] + 1];
    case "D":
      return [now[0], now[1] - 1];
  }
}

function generateKey(now, moved) {
  return `${Math.min(now[0], moved[0])},${Math.max(
    now[0],
    moved[0]
  )},${Math.min(now[1], moved[1])},${Math.max(now[1], moved[1])}`;
}
