function solution(s) {
  return s.match(/(\d+)/g)?.reduce((t, m) => t + Number(m), 0) || 0;
}
