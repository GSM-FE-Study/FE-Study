function solution(q, r, code) {
  const answer = [...code].filter((value, index) => index % q === r).join("");
  return answer;
}
