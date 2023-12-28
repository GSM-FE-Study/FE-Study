const solution = (a, b) =>
  a % 2 && b % 2
    ? a * a + b * b
    : a % 2 || b % 2
    ? 2 * (a + b)
    : Math.abs(a - b);
