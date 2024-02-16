function solution(array, n) {
  return array.filter((value) => value === n).length;
}

function solution(array, n) {
  let answer = 0;
  array.forEach((value) => {
    if (value === n) {
      answer++;
    }
  });
  return answer;
}
