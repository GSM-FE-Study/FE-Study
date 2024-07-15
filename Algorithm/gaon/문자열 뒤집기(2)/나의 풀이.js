function solution(my_string, s, e) {
  const start = my_string.substring(0, s);
  const reverse = [...my_string.substring(s, e + 1)].reverse().join("");
  const end = my_string.substring(e + 1);

  return `${start}${reverse}${end}`;
}
