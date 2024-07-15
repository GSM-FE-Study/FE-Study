function solution(arr, divisor) {
  const answer = [];

  arr.forEach((i) => {
    if (!(i % divisor)) answer.push(i);
  });

  if (!answer.length) answer.push(-1);

  return answer.sort((a, b) => a - b);
}
