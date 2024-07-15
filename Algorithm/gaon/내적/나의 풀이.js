function solution(a, b) {
  const multiply = a.map((item, index) => item * b[index]);
  const answer = multiply.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber
  );

  return answer;
}
