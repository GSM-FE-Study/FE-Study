function solution(my_string, s, e) {
  const newStr = my_string.substring(s, e + 1);
  return my_string.split(newStr).join(newStr.split("").reverse().join(""));
}
