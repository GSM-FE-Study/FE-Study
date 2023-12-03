function solution(arr, k) {
  const answer =
    k % 2 ? [...arr].map((i) => i * k) : [...arr].map((i) => i + k);
  return answer;
}
