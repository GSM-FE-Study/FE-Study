function solution(n) {
  let answer = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      // 짝수
      n /= 2;
      console.log(n);
      answer.push(n);
    } else {
      //홀수
      n = 3 * n + 1;
      console.log(n);
      answer.push(n);
    }
  }
  return answer;
}
