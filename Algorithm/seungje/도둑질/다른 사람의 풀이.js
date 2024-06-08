function solution(money) {
  const len = money.length;

  // 첫 번째 집을 털 경우
  const steal1 = new Array(len).fill(0);
  steal1[0] = money[0];
  steal1[1] = money[0];
  for (let i = 2; i < len - 1; i++) {
    steal1[i] = Math.max(steal1[i - 1], steal1[i - 2] + money[i]);
  }

  // 첫 번째 집을 털지 않는 경우
  const steal2 = new Array(len).fill(0);
  steal2[0] = 0;
  steal2[1] = money[1];
  for (let i = 2; i < len; i++) {
    steal2[i] = Math.max(steal2[i - 1], steal2[i - 2] + money[i]);
  }

  // 마지막 집을 털지 않은 경우와 마지막 집을 털어도 되는 경우 중 최댓값 반환
  return Math.max(steal1[len - 2], steal2[len - 1]);
}
