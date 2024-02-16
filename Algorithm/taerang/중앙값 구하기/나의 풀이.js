function solution(array) {
  let answer = 0;

  array.sort(function (a, b) {
    return a - b;
  });

  return (answer = array[Math.floor(array.length / 2)]);
}
