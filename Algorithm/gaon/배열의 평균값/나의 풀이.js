function solution(numbers) {
  let result = 0;
  numbers.map((num) => {
    result += num;
  });

  return result / numbers.length;
}
