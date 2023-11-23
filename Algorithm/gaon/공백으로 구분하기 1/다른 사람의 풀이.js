function solution(my_string) {
  var answer = [];
  let i = 0;
  let j = 0;
  answer[i] = "";
  while (my_string[j]) {
    if (my_string[j] !== " ") {
      answer[i] += my_string[j];
    } else {
      i++;
      answer[i] = "";
    }
    j++;
  }
  return answer;
}
