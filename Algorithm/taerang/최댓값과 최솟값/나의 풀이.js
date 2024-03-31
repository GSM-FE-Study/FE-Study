function solution(s) {
  const numbers = s.split(" ").map(Number);

  numbers.sort((a, b) => a - b);

  const answer = numbers[0] + " " + numbers[numbers.length - 1];

  return answer;
}
