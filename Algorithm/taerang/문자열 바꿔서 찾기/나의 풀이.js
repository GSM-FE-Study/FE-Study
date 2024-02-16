function solution(myString, pat) {
  let answer = "";

  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "A") {
      answer += "B";
    } else {
      answer += "A";
    }
  }

  return answer.includes(pat) ? 1 : 0;
}
