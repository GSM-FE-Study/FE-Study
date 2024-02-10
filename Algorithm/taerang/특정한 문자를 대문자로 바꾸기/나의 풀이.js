function solution(my_string, alp) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === alp) {
      answer += my_string[i].toUpperCase();
    } else {
      answer += my_string[i];
    }
  }
  return answer;
}
