function solution(start, end) {
  var answer = [];
  do {
    answer.push(start);
    start--;
  } while (start >= end);
  return answer;
}
