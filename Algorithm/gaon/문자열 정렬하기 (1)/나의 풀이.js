function solution(my_string) {
  const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const number = [...my_string].filter((i) => numberList.includes(i));
  const convertNumber = number.map((i) => Number(i));
  return convertNumber.sort((a, b) => a - b);
}
