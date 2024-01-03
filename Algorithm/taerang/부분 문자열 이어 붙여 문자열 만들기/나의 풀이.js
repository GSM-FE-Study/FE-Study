function solution(my_strings, parts) {
  let answer = "";

  for (let i = 0; i < my_strings.length; i++) {
    let index = parts[i];
    answer += my_strings[i].substring(index[0], index[1] + 1);
  }
  return answer;
}
