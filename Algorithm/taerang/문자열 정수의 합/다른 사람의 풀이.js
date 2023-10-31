function solution(num_str) {
  var answer = 0;

  num_str.split("").map((a) => (answer += Number(a)));

  return answer;
}
