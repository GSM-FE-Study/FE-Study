function solution(n) {
  let answer = 2;
  let cnt = 1;

  while (cnt < n) {
    if (cnt * cnt == n) {
      answer = 1;
      break;
    }

    ++cnt;
  }

  return answer;
}

function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
