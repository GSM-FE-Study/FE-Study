function solution(numbers) {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
}
