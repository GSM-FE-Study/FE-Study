function solution(my_string, indices) {
  let answer = "";
  return [...my_string].reduce(
    (p, c, idx) => (p += indices.includes(idx) ? "" : c),
    ""
  );
}
