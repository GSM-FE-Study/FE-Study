function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}
