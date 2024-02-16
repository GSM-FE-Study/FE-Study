function solution(numbers) {
  let answer = 0;
  let num,
    num2 = [];

  num = numbers.slice().sort((a, b) => a - b);
  num2 = numbers.slice().sort((a, b) => b - a);

  return num[0] * num[1] > num2[0] * num2[1]
    ? num[0] * num[1]
    : num2[0] * num2[1];
}
