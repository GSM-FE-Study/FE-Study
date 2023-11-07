function solution(order) {
  let answer = 0;

  const temp = order.toString(); //number type is change string

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "3" || temp[i] === "6" || temp[i] === "9") {
      answer += 1;
    }
  }

  return answer;
}
