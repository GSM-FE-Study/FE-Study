function solution(my_string, s, e) {
  const arr = Array.from(my_string);
  const words = arr.slice(s, e + 1);
  words.reverse();
  arr.splice(s, e - s + 1, ...words);
  return arr.join("");
}
