function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  answer.sort(function (a, b) {
    return a - b;
  });

  answer = [...new Set(answer)];

  return answer;
}
