function solution(num_list) {
  var answer = [];

  num_list.sort((a, b) => a - b);
  answer = num_list.splice(5);
  return answer;
}
