const obj = { w: 1, s: -1, d: 10, a: -10 };

function solution(n, control) {
  const answer = [...control].reduce(
    (accumulator, currentValue) => accumulator + obj[currentValue],
    n
  );

  return answer;
}
