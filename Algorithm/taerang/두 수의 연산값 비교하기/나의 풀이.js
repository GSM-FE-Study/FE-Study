function solution(a, b) {
  let num = a.toString();
  return (num += b.toString()) >= 2 * a * b ? Number(num) : Number(2 * a * b);
}
