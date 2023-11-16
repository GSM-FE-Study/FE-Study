function solution(sides) {
  const [long, a, b] = sides.sort((a, b) => b - a);

  return long < a + b ? 1 : 2;
}
s;
