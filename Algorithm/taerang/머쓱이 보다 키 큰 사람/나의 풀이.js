function solution(array, height) {
  return array.filter((value) => value > height).length;
}
