function solution(n) {
  const array = Array(n)
    .fill()
    .map((x, idx) => idx + 1);
  return n % 2 === 0
    ? array.reduce((a, b) => (b % 2 === 0 ? a + Math.pow(b, 2) : a), 0)
    : array.reduce((a, b) => (b % 2 === 0 ? a : a + b), 0);
}
