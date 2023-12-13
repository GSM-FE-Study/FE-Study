function solution(myString) {
  //아스키코드 이용 a -> 97 A -> 65 : 소문자와 대문자 32 차이가 남

  var answer = "";
  var my_splitD = [];

  var my_split = myString.split("");

  for (let i = 0; i < my_split.length; i++) {
    if (my_split[i].charCodeAt() < 97) {
      my_splitD[i] = my_split[i].charCodeAt() + 32;
      answer += String.fromCharCode(my_splitD[i]);
    } else {
      my_splitD[i] = my_split[i].charCodeAt();
      answer += String.fromCharCode(my_splitD[i]);
    }
  }

  console.log(answer);

  return answer;
}
