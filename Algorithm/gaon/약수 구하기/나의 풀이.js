function solution(n) {
  const divisor = [];

  for (let i = 1; i <= n; i++) if (n % i === 0) divisor.push(i);

  return divisor;
}
