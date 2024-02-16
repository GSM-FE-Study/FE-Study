function solution(start, end) {
  idx = start;
  return Array.from({ length: end - start + 1 }, () => {
    return start++;
  });
}
