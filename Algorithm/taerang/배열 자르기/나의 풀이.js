function solution(numbers, num1, num2) {
  let answer = [];
  answer.push(...numbers.slice(num1, num2 + 1));
  return answer;
}
