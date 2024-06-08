function solution(sequence, k) {
  const result = [];

  let [front, back, cnt] = [0, 0, 0];
  while (back - 1 < sequence.length) {
    if (cnt <= k) {
      if (cnt === k) result.push([front, back - 1, back - front]);
      cnt += sequence[back++];
    } else if (cnt > k) {
      cnt -= sequence[front++];
    }
  }

  const min = result.sort((a, b) => a[2] - b[2]);

  return [min[0][0], min[0][1]];
}
