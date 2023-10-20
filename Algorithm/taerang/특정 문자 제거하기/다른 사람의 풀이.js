function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}

//문자열을 split 메서드를 사용하여 letter를 구분자로 분할한 후, join 메서드를 사용하여 구분자 없이 다시 합친다.
