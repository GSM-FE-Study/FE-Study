function solution(my_string, num1, num2) {
  const str_arr = [...my_string];
  const temp_str = str_arr[num1];

  str_arr[num1] = str_arr[num2];
  str_arr[num2] = temp_str;

  return str_arr.join("");
}
