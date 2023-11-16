function solution(array) {
  return [
    Math.max(...array),
    array.findIndex((el) => el === Math.max(...array)),
  ];
}
