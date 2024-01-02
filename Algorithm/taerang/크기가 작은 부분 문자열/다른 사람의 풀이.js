function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const substring = t.substring(i, i + p.length);
    if (parseInt(substring) <= parseInt(p)) {
      answer++;
    }
  }

  return answer;
}
