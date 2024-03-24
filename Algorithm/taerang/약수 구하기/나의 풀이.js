function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

//2번째 풀이
function solution(n) {
  let answer = [];
  let cnt = 1;

  while (cnt <= n) {
    if (n % cnt === 0) {
      answer.push(cnt);
    }
    cnt++;
  }
  return answer;
}
