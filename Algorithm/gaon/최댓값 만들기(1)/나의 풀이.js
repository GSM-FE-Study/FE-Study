function solution(numbers) {
  const number = [...numbers].sort((a, b) => b - a);
  return number[0] * number[1];
}
