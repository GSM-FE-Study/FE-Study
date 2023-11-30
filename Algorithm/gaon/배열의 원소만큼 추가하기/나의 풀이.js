function solution(arr) {
  const result = [];

  arr.forEach((i) => {
    for (let j = 1; j <= i; j++) {
      result.push(i);
    }
  });

  return result;
}
