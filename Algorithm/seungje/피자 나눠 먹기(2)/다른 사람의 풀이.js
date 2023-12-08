function solution(n) {
  return (
    Array(6)
      .fill(n)
      .map((v, idx) => (v = v * (idx + 1)))
      .find((v) => v % 6 === 0) / 6
  );
}
