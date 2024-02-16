function solution(my_string) {
  return my_string
    .split("")
    .filter((value) => !["a", "e", "i", "o", "u"].includes(value))
    .join("");
}
