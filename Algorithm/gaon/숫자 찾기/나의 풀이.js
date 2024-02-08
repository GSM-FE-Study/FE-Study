function solution(num, k) {
  const number = [...num.toString()];
  return number.indexOf(k.toString()) > -1
    ? number.indexOf(k.toString()) + 1
    : -1;
}
