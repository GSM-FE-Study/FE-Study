function solution(intStrs, k, s, l) {
  let answer = [];
  let checkNum = 0;

  for (let i = 0; i < intStrs.length; i++) {
    checkNum = intStrs[i].slice(s, s + l);
    if (k < checkNum) {
      answer.push(Number(checkNum));
    }
  }

  return answer;
}
