function solution(myString, pat) {
  const regex = RegExp(pat, "i");
  return regex.test(myString) ? 1 : 0;
}
