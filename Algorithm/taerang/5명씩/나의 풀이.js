function solution(names) {
  let answer = [];

  names.map((value, index) => {
    if (index % 5 === 0) {
      answer.push(value);
    }
  });
  return answer;
}
