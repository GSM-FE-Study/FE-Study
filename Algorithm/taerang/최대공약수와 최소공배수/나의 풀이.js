function solution(n, m) {
  const A = Math.Max(n, m);
  const B = (n * m) / A;

  return [A, B];
}

Math.Max = function (a, b) {
  return b === 0 ? a : Math.Max(b, a % b);
};
