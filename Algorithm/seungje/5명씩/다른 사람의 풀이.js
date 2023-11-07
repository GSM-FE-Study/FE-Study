function solution(names) {
  var answer = [];
  answer = names.map((v, i) => (i % 5 == 0 ? v : "")).filter((v) => v != "");
  return answer;
}
