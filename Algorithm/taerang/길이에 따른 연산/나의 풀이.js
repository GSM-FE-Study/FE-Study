function solution(num_list) {
  let answer = 1;

  return num_list.length >= 11
    ? num_list.reduce((acc, value) => acc + value, 0)
    : num_list.reduce((acc, value) => acc * value, 1);
}
