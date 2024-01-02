function solution(n) {
  // 쉬운방법
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
