function solution(arr, k) {
  let answer = [];

  for (num of arr) {
    if (k % 2 === 0) {
      answer.push(num + k);
    } else {
      answer.push(num * k);
    }
  }

  return answer;
}
