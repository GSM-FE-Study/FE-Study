function solution(arr) {
  return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
}
