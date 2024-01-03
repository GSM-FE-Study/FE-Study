function solution(n, k) {
  let numbers = n
    .toString(k)
    .split("0")
    .filter((a) => a > 1);
  let answer = 0;
  for (const number of numbers) {
    answer++;
    if (number > 3) {
      for (let i = 2; i * i <= number; i++) {
        if (number % i == 0) {
          answer--;
          break;
        }
      }
    }
  }
  return answer;
}
