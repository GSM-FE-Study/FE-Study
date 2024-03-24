function solution(myString) {
  let answer = [];
  let str = "";

  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "x") {
      if (str !== "") {
        answer.push(str);
        str = "";
      }
    } else {
      str += myString[i];
    }
  }

  if (str !== "") {
    answer.push(str);
  }

  return answer.sort();
}
