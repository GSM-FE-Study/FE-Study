function solution(n) {
  1 <= n <= 100;

  let pizza = 7;
  let result = pizza;

  if (n > result) {
    for (let i = 0; i < n / pizza - 1; i++) {
      result += pizza;
    }
  }

  var answer = result / 7;
  return answer;
}
