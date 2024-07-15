function solution(array) {
  const arr = array.sort((a, b) => a - b);

  return arr[Math.floor(arr.length / 2)];
}
