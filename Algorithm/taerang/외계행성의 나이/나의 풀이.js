function solution(age) {
  let answer = "";
  const ageObject = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  for (let i = 0; i < age.toString().length; i++) {
    answer += ageObject[age.toString()[i]];
  }

  return answer;
}
