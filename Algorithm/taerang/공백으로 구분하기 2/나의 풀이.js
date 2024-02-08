function solution(my_string) {
  let answer = [];
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== " ") {
      result += my_string[i];
    } else if (result !== "") {
      answer.push(result);
      result = "";
    }
  }

  if (result !== "") {
    answer.push(result);
  }

  return answer;
}
