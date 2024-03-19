// 원리 이런 풀이도 가능했었는데 문제가 개편되면서 싹 다 막힌 모양이다. 지금은 힙을 이용한 풀이가 아니면 풀 수 없다.

const noOvertime = (no, works) => {
  while (no > 0) {
    works.sort((a, b) => b - a);
    works[0] -= 1;
    no--;
  }
  return works.map((a) => a * a).reduce((a, b) => a + b);
};
