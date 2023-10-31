function solution(order) {
  return String(order)
    .split("")
    .reduce((a, c) => a + (["3", "6", "9"].includes(c) ? 1 : 0), 0);
}
