function solution(a, b) {
  let answer = 0;
  let num1 = a.toString(),
    num2 = b.toString();

  if (num1 + num2 > num2 + num1) {
    answer = num1 + num2;
  } else {
    answer = num2 + num1;
  }

  return parseInt(answer);
}
