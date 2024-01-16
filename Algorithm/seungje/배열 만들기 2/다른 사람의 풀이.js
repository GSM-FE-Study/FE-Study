function* gen50() {
  let i = 1;

  while (true) {
    yield Number(Number(i).toString(2)) * 5;
    i++;
  }
}
function solution(l, r) {
  const n = gen50();
  let a = 0;
  const arr = [];

  while (a < l) {
    a = n.next().value;
  }
  while (a <= r) {
    arr.push(a);
    a = n.next().value;
  }

  return arr.length ? arr : [-1];
}
