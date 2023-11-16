function solution(phone_number) {
  let number = [...phone_number];
  const phoneArray = [];
  for (let i = 0; i < phone_number.length; i++) {
    if (i >= phone_number.length - 4) {
      phoneArray.push(number[i]);
    } else {
      phoneArray.push("*");
    }
  }
  const answer = phoneArray.join("");
  return answer;
}
