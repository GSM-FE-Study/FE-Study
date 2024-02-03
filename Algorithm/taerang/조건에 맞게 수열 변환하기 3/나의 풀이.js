function solution(arr, k) {
  return arr.map((value) => {
    return k % 2 === 0 ? value + k : value * k;
  });
}
