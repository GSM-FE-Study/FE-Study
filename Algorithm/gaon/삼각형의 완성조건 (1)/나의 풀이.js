function solution(sides) {
  const [first, second, third] = [...sides].sort((a, b) => a - b);
  const answer = first + second > third ? 1 : 2;

  return answer;
}
