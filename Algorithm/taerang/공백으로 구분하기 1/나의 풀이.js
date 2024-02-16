function solution(my_string) {
  let answer = "";
  let result = [];

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== " ") {
      answer += my_string[i];
    } else {
      result.push(answer);
      answer = "";
      console.log(result);
    }
  }

  if (answer !== "") {
    result.push(answer);
  }

  return result;
}
