function* multiple(n, k) {
  let value = 0;
  while (value + k <= n) {
    yield (value += k);
  }
}

function solution(n, k) {
  return [...multiple(n, k)];
}
