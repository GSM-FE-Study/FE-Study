function solution(number, k) {
  const answer = [];
  let head = 0;
  let del = k;

  answer.push(number[head++]);
  while (answer.length < number.length - k || head < number.length) {
    if (del && answer[answer.length - 1] < number[head]) {
      answer.pop();
      del--;
      continue;
    }
    answer.push(number[head++]);
  }

  return answer.slice(0, number.length - k).join("");
}
