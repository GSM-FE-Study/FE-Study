function solution(x, n) {
  const answer = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += x;
    answer.push(sum);
  }
  return answer;
}
