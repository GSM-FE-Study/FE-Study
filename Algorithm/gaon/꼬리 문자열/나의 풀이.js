function solution(str_list, ex) {
  const answer = str_list.filter((str) => !str.includes(ex)).join("");
  return answer;
}
