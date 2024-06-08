function solution(queue1, queue2) {
  let answer = 0;
  const max = queue1.length * 2;
  let value = queue1.reduce((acc, cur, idx) => acc + cur - queue2[idx], 0) / 2;
  let [i, j] = [0, 0];
  while (value !== 0 && answer < max * 2) {
    if (value > 0) {
      const v = queue1[i];
      i++;
      value -= v;
      queue2.push(v);
    } else {
      const v = queue2[j];
      j++;
      value += v;
      queue1.push(v);
    }
    answer++;
  }
  return value !== 0 ? -1 : answer;
}
