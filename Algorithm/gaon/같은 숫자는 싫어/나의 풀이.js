function solution(arr) {
  const answer = [];

  arr.forEach((i) => {
    if (answer[answer.length - 1] !== i) answer.push(i);
  });

  return answer;
}
