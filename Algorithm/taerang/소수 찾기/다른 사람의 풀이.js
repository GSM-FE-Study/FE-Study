function numberOfPrime(n) {
  let result = 0;
  // 함수를 완성하세요.
  let cnt = 0;
  for (let a = 2; a <= n; a++) {
    cnt = 0;
    for (let b = 1; b <= a; b++) {
      if (a % b == 0) cnt++;
    }
    if (cnt == 2) result++;
  }
  return result;
}
