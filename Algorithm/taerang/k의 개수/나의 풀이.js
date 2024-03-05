function solution(i, j, k) {
  let answer = 0;

  for (let q = i; q <= j; q++) {
    const strQ = q.toString();
    for (let idx = 0; idx < strQ.length; idx++) {
      if (strQ[idx] === k.toString()) {
        answer += 1;
      }
    }
  }

  return answer;
}
